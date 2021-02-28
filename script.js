Vue.component('post',
    {
        props: ['post'],
    }
);


let vue_app = new Vue({
    el: "#app",
    data: {
        isEditing: false,
        users: [
            {
                name: 'Muhammad Iqbal Mubarok'
            },
            {
                name: 'Ruby Purwanti'
            },
            {
                name: 'Faqih Muhammad'
            }
        ],
        user: "",
        tombol_action: 'Add'
    },
    methods: {
        postUser() {
            this.users.push({
                name: this.user,
            })
            this.user = "";
        },
        editUser(index) {
            this.user = this.users[index];
            this.tombol_action = 'Update';
        },
        updateUser () {
            this.users.push({
                name:this.user
            })
            this.user = '';
            this.tombol_action = 'Add';
        },
        deleteUser (index) {
            let deleted = index;
            let cf = confirm("Apakah anda yakin?");
            if (cf) {
                this.users.splice(index, 1);
            }
        }
    }
});
