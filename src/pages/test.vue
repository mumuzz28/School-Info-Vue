<template>

</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        handleSubmit() {
            // Handle login logic here
            console.log('Username:', this.username);
            console.log('Password:', this.password);
        }
    }
};

const login = async (LoginParams) => {
    try {
        await login(LoginParams).then(res => {
            if (res.data.code == 200) {
                localStorage.setItem('token', res.data.data.token)
                userStore.setUserInfo(res.data.data)
                console.log(userStore.get)
                showToast(res.data.msg)
                location.reload(onMounted(() => {
                    router.push({ path: '/' })
                }))
            } else {
                showToast(res.data.msg)
            }
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>