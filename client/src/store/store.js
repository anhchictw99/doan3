import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import Swal from 'sweetalert2'

//import {setting} from '../setting'
Vue.use(Vuex,axios,Swal)

export default new Vuex.Store({
    state:{
        x : "hay",
        y: {},
        z:'',
        token:'',
        token1:'',
        kq:'',
        signinrelative:'',
        authrelative:'',
        userregister:'fail',
        entercode:'',
        createwill:''
        
        
    },
    actions:{
        loadPosts({commit}){
            axios
            .get('http://localhost:3000/relative/api')
            .then(result=>{
                console.log(result)
                let posts = result.data
                commit('SET',posts)

            })
            .catch(err =>console.log(err))
        },
        loadMids({commit}){
       
            axios
            .get('http://localhost:3000/',{headers:{Authorization:'Bearer ' +localStorage.getItem("token")}})
            .then(result =>{
              //  console.log(result)
                let p = result.data
                commit('SETMID',p)
            })
            .catch()
        },
        userLogin({commit},data){
           
            axios.
            post('http://localhost:3000/user/login',{username:data.username,password:data.password})
            .then(result=>{
                

                let token = result.data.token;
                if (token) {
                    localStorage.setItem("token", token);
                    console.log(token)
                    router.push("/");
                    commit('USERLOGIN',token)
                
                  } else{
                    
                      console.log('loi');
                      router.push("/login");
                  }

            }).catch(err =>{console.log(err)
                localStorage.removeItem("token");
                Swal.fire(
                    'đã fail',
                    'đột nhập lại đi bạn',
                    'error'
                  )
            })
            
        },
        userRegister({commit},data){
           
            axios.
            post('http://localhost:3000/user/register',data)
            .then(result=>{
                Swal.fire(
                    'Good job!',
                    'bạn đã đột nhập thành công',
                    'success'
                  )
                console.log(result);
                
                commit('USERREGISTER','success')
               
            })
            .catch(err=>{console.log(err)
                Swal.fire(
                    'đã fail',
                    'đột nhập lại đi bạn',
                    'error'
                  )
                commit('USERREGISTER','fail')
            })
            
        },
        // getWill({commit},data){
            
        //     axios.
        //     post('http://localhost:3000/user/createWill',{will:data.will},{headers:{Authorization:'Bearer ' +localStorage.getItem("token")}})
        //     .then(result =>{
        //         console.log(result)
        //         let kq = result.data;
        //         commit('CREATEWILL',kq.mess);
        //     })
        //     .catch(err=>console.log(err))
        // },
        signUpRela({commit},data){
            axios.
            post('http://localhost:3000/relative/login',data)
            .then(result =>{
                let token = result.data.token;
                if (token) {
                    localStorage.setItem("token", token);
                   
                    console.log(result)
                    commit('SIGNINRELATIVE',token)
                
                  } else{
                      console.log('loi');
                      router.push("/");
                  }
                // let kq = result.data;
                // commit('SIGNINRELATIVE',kq.message);
            })
            .catch(err=>console.log(err))
        },

        // authRelativeStore({commit,state},data){
            
        //     axios.
        //     post('http://localhost:3000/relative/authRelative',{code:data.code},{headers:{Authorization:`Bearer ${state.token1}`}})
        //     .then(result =>{
        //         let kq = result.data;
        //         commit('AUTHRELATIVE',kq.message);
        //     })
        //     .catch(err=>console.log(err))
        // },
        logOut({commit}){
            localStorage.removeItem("token");
            commit('LOGOUT')
            router.push("/");
        },
        enterCode({commit},data){
            axios.
            post('http://localhost:3000/relative/authRelative',{random:data.random},{headers:{Authorization:'Bearer ' +localStorage.getItem("token")}})
            .then(result=>{
                
                let mess = result.data.message;
                if ( mess =='success' ) {
                    
                    router.push("/");
                    console.log(result)
                    commit('ENTERCODE',mess)
                
                  } else{
                      console.log('loi');
                      router.push("/login");
                  }
            })
            .then(err=>{console.log(err)})
        },
        createWill({commit},data){
            axios.post('http://localhost:3000/user/createWill',{will:data.will},{headers:{Authorization:'Bearer ' +localStorage.getItem("token")}})
            .then(result=>{
                let message =result.data.message
                let err =result.data.err
                if(message =='success'){
                    Swal.fire(
                        'Good job!',
                        'bạn đã tạo di chúc công, bạn có muốn thanh toán luôn không ?',
                        'success'
                      )
                      commit('CREATEWILL1','success')
                      
                }
                else if(err =='forbides'){
                    Swal.fire(
                        'Good job!',
                        'bạn không được phép truy cập',
                        'error'
                      )
                      commit('CREATEWILL1','forbides')
                }else{
                    Swal.fire(
                        'fail rồi nhá',
                        'tạo lại nha',
                        'error'
                      )
                }

            })
            .catch(err=>{
                console.log(err)
                Swal.fire(
                    'fail rồi nhá',
                    'tạo lại nha',
                    'error'
                  )
            })
        }


       
        
       
    },
    
    mutations:{
        SET(state,posts){
            state.y = posts
        },
        SETMID(state,p){
            state.z = p
        },
        USERLOGIN(state,p){
            state.token = p
        },
        CREATEWILL(state,kq){
            state.kq = kq;
        },
        SIGNINRELATIVE(state,token){
            state.token1 = token
        },
        AUTHRELATIVE(state,p){
            state.authrelative = p;
        },
        LOGOUT(state){
            state.z = '';
        },
        USERREGISTER(state,p){
            state.userregister = p
        },
        ENTERCODE(state,p){
            state.entercode = p;
        },
        CREATEWILL1(state,p){
            state.createwill = p;
        },



    }
});