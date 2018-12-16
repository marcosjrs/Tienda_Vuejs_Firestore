import firebase from 'firebase';
import * as faker from 'faker';

export default {
    state: {
        admin: {
            products: {
                dialog: false,
                editMode: false,
                product: {
                    id: null,
                    name: '',
                    price: '',
                    file_id: '',
                    url: ''
                }
            }
        }
    },
    actions: {
        // Para subir una imagen y vincularla a un producto
        pushFileToStorage({ commit }, { fileToUpload, idProduct }) {
            const storageRef = firebase.storage().ref();
            const fileId = faker.random.alphaNumeric(16);
            // En la siguiente linea si no existe la carpeta 'products', la crea
            const uploadTask = storageRef.child(`/products/${fileId}`).put(fileToUpload);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => { // Indica el progreso de lo que va succediendo mientras se sube
                    const snap = firebase.storage.UploadTaskSnapshot;
                },
                (error) => { // Si hay un error
                    console.log(error);
                },
                () => { // Al terminar de subir la imagen (fileToUpload)..
                    fileToUpload.url = uploadTask.snapshot.downloadURL;
                    let product = firebase.firestore().collection('products').doc(idProduct);
                    return product.update({   // modificamos el producto (en fireStore), para añadirle la url de la nueva imagen (fileToUpload) 
                        url: fileToUpload.url,
                        file_id: fileId
                    }); // devolvemos una promise
                }
            )
        },
        removeFile({ commit }, product) {
            //Eliminamos el archivo de un producto
            return firebase.storage().ref().child(`products/${product.file_id}`).delete();
        },
        updateDeletedProduct({ commit }, id) {
            //Actualizamos el producto, 'vaciándole' la url de la imagen
            let product = firebase.firestore().collection(`products`).doc(id);
            if (product) {
                return product.update({
                    url: '',
                    file_id: ''
                }); // devolvemos una promise
            }
        }
    },
    mutations: {
        //Para manejar el popup para editar o crear un producto
        toggleProductsDialog: (state, data) => {
            state.admin.products.dialog = !state.admin.products.dialog;
            state.admin.products.editMode = data.editMode;
            state.admin.products.product = data.product;
        },
    },
    getters: {
        productsDialog: (state) => {
            return state.admin.products.dialog;
        },
        productForEdit: (state) => {
            return state.admin.products.product;
        },
        productsDialogEditMode: (state) => {
            return state.admin.products.editMode;
        }
    }
};
