<template>
<div class="Login">
    <section class="login">
        <div class="login__content row">
            <div class="login__left m-0 p-0 col-12 col-sm-7 col-lg-7">
                <img src="./../../public/img/d51zqrb-bc5c7a5d-6a3a-471c-bd27-9570292ddbcd.jpg" alt="">
                <div class="blackCover"></div>
                <div class="pageLogo">
                    <i class="fa fa-camera-retro text-white"></i>
                </div>
            </div>
            <div class="login__right m-0 p-0 col-12 col-sm-5 col-lg-5">
                <div class="loginForm">
                    <h1>User Login</h1>
                    <div class="chooseUser">
                        <ul class="nav nav-tabs" id="userTypeTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="legator-tab" data-toggle="tab" href="#legatorLogin" role="tab" aria-controls="home" aria-selected="true">Legator</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="relative-tab" data-toggle="tab" href="#relativeLogin" role="tab" aria-controls="profile" aria-selected="false">Relative</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="userLoginForm tab-pane fade show active" id="legatorLogin" role="tabpanel" aria-labelledby="home-tab">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit="handleSubmit(userLogin)" >
                                    <!-- <input type="text" v-model="username" id="userName" placeholder="Username..."> -->
                                    <ValidationProvider name="Username" rules="required|alpha" v-slot="{ errors }">
                                     <div class="form-group">
                                       
                                       <input type="text" id="userName" class="form-control" v-model="username">
                                       <span>{{ errors[0] }}</span>
                                    </div>
                                    </ValidationProvider>
                                    <ValidationProvider name="Password" rules="required|max:12|min:6" v-slot="{ errors }">
                                     <div class="form-group">
                                       
                                       <input type="password" id="password" class="form-control" v-model="password">
                                       <span>{{ errors[0] }}</span>
                                    </div>
                                    </ValidationProvider>
                                   <!-- <input type="password" v-model="password" id="password" placeholder="Password..."> -->
                                    <button type="submit"   >LOGIN</button>
                                    
                                    <p>Forgot <a href="#">Username / Password ?</a></p>
                                </form>
                                </ValidationObserver>
                            </div>
                            <div class="userLoginForm tab-pane fade" id="relativeLogin" role="tabpanel" aria-labelledby="profile-tab">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(fdfdfd)">
                                <!-- <form action=""> -->
                                    <!-- <input type="text" v-model="relativeName" id="relativeName" placeholder="Name"> -->
                                    <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
                                        <div class="form-group">
                                            
                                            <input type="text" class="form-control" id="relativeName" v-model="relativeName">
                                            <span>{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                    <!-- <input type="email" v-model="relativeEmail" id="relativeEmail" placeholder="Email"> -->
                                    <ValidationProvider name="E-Mail" rules="required|email" v-slot="{ errors }">
                                      <div class="form-group">
                                  
                                       <input type="email" class="form-control" id="relativeEmail" v-model="relativeEmail">
                                       <span>{{ errors[0] }}</span>
                                      </div>
                                    </ValidationProvider>
                                    <button type="button" data-toggle="modal" data-target="#relativeModal"  >LOGIN</button>

                                    <p>Forgot <a href="#">Username /
                                            Password ?</a></p>
                                            
                                </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
                <a data-toggle="modal" data-target="#signUpModal" id="createAccount" href="#">Create your account <i class="fa fa-long-arrow-alt-right"></i></a>
            </div>

            <!-- SIGN UP MODAL -->
            <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h3></h3>
                            <input type="text" v-model="regisname" id="signUpName" placeholder="USER NAME">
                            <input type="password" v-model="regispass" id="signUpPass" placeholder="PASSWORD">
                            <input type="date" name="" id="signUpBirth">
                            <!-- <select name="genders" id="signUpGender">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Another</option>
                                </select> -->
                            <input type="email" v-model="email" id="signUpEmail" placeholder="EMAIL">
                            <input type="tel" v-model="phone" id="signUpTel" placeholder="PHONE">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn__clear" data-dismiss="modal">Clear</button>
                            <button type="button" class="btn btn__signUp" ><a data-dismiss="modal" data-toggle="modal" href="#legatorModal">Sign up</a>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
           
            <!-- SIGN UP MODAL -->

        </div>
    </section>

    <!-- LEGATOR MODAL QUESTION -->
     <div class="modal" id="legatorModal" >
            <div class="modal-dialog">
                <div class="modal-content"> 
    <!-- Modal Header -->
    <div class="modal-header">
                        <h4 class="modal-title">Questions variety</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div> 

    <!-- Modal body -->
  <div class="modal-body">
                        <p>Question: This is a variety question ?</p>
                        <input type="text" v-model="question1"  placeholder="Your answer ...">
                        <p>Question: This is a variety question ?</p>
                        <input type="text" v-model="question2"  placeholder="Your answer ...">
                    </div>

    <!-- Modal footer -->
   <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click.prevent="signUp">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    <!-- LEGATOR MODAL QUESTION -->

     <!-- CHECK CODE -->
     <div class="modal" id="checkcode" >
            <div class="modal-dialog">
                <div class="modal-content"> 
    <!-- Modal Header -->
    <div class="modal-header">
                        <h4 class="modal-title">Check Code</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div> 

    <!-- Modal body -->
  <div class="modal-body">
                        <p>Entering code</p>
               
                        
                        <input type="text" v-model="random"  placeholder="Your answer ...">
                    </div>

    <!-- Modal footer -->
   <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="enterCode">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    <!-- CHECK CODE-->

    <!-- RELATIVE MODAL QUESTION -->
    <div class="modal" id="relativeModal" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div>
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Questions variety</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <p>Question: This is a variety question(name user) ?</p>
                        <input type="text" v-model="userT"  placeholder="Your answer ...">
                        <p>Question: This is a variety question ?</p>
                        <input type="text" v-model="questionare"  placeholder="Your answer ...">
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn__signUp" @click.prevent="signUpRela" ><a data-dismiss="modal" data-toggle="modal" href="#checkcode">Sign up</a>
                                </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Login',
    props: {
        msg: String
    },
    data(){
      return {
          
         
          username:'',
          password:'',
          relativeName:'',
          relativeEmail:'',
          userT:'',
          questionare:'',
          regisname:'',
          regispass:'',
          email:'',
          phone:'',
          question1:'',
          question2:'',
          random:''

      }
  },
  methods:{
      userLogin(){
          var data= {
              username: this.username,
              password:this.password

          }
          this.$store.dispatch('userLogin',data)
      },
       signUpRela(){
          var data = {
              name: this.relativeName,
              email: this.relativeEmail,
              userT:this.userT,
              questionare : this.questionare
            
          }
          this.$store.dispatch('signUpRela',data)
      },
    
      signUp(){
          var data ={
              username : this.regisname,
              password: this.regispass,
              email: this.email,
              phone: this.phone,
              question1:this.question1,
              question2:this.question2,
          }
          this.$store.dispatch('userRegister',data)
      },
      enterCode(){
          var data ={ random:this.random}
          this.$store.dispatch('enterCode',data)
      }

  },
  computed:{
    ...mapState(['authrelative'])

  }
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
$color-orange-0: #f9a825;

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.login {
    .login__content {
        .login__left {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
                height: 100%;
            }

            .blackCover {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-image: linear-gradient(to left, black, rgba(0, 0, 0, 0));
            }

            .pageLogo {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 200px;
            }
        }

        .login__right {
            position: relative;

            .loginForm {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 50%;

                #userTypeTab {
                    border: 0;
                    display: flex;
                    justify-content: center;

                    .nav-item {
                        .active {
                            color: $color-orange-0;
                            border-bottom: 2px solid $color-orange-0;
                        }

                        a {
                            border: 0;
                            color: black;

                            &:active:focus {
                                color: $color-orange-0;
                            }
                        }
                    }
                }

                h1 {
                    display: block;
                    text-align: center;
                    color: black;
                    font-size: 50px;
                    margin-bottom: 20px;
                }

                .userLoginForm {

                    #legator,
                    #relatives:checked {
                        background-color: $color-orange-0;
                    }

                    #userName,
                    #password,
                    #relativeName,
                    #relativeEmail {
                        width: 100%;
                        background-color: #e6e6e6;
                        border: 0;
                        padding: 10px 15px;
                        border-radius: 25px;
                        margin-top: 10px;
                        color: $color-orange-0;

                        &:focus {
                            border: 0;
                            outline: none;
                            box-shadow: none;
                        }
                    }

                    button {
                        margin-top: 20px;
                        width: 100%;
                        padding: 10px 15px;
                        border: 0;
                        border-radius: 25px;
                        background-color: $color-orange-0;

                        &:focus {
                            box-shadow: none;
                            border: 0;
                            outline: none;
                        }
                    }

                    p {
                        text-align: center;
                        margin-top: 15px;
                        color: gray;

                        a {
                            text-decoration-line: none;
                            color: black;
                            transition: 0.2s all;

                            &:hover {
                                color: $color-orange-0;
                            }
                        }
                    }
                }
            }

            #createAccount {
                position: absolute;
                left: 50%;
                bottom: 10%;
                transform: translateX(-50%);
                text-decoration-line: none;
                color: black;
                transition: 0.2s all;

                &:hover {
                    color: $color-orange-0;
                }
            }
        }

        #signUpModal {
            .modal-dialog {
                position: relative;

                .modal-content {
                    border-radius: 10px;
                    overflow: hidden;

                    .modal-header {
                        border: 0;
                        width: 100%;
                        height: 90px;
                        background-image: url(./../../public/img/black-and-white-city-houses-skyline.jpg);
                    }

                    .modal-body {
                        padding: 45px;

                        input {
                            width: 100%;
                            margin-top: 15px;
                            border-radius: 0;
                            border: 0;
                            border-bottom: 1px solid gray;

                            &:focus {
                                outline: none;
                                box-shadow: none;
                            }
                        }
                    }

                    .modal-footer {
                        border: 0;

                        .btn__clear {
                            background-color: #e6e6e6;
                            border: 0;
                        }

                        .btn__signUp {
                            background-color: $color-orange-0;
                            border: 0;
                        }
                    }
                }
            }
        }
    }
}

.modal {
    .modal-dialog {
        .modal-content {
            border-radius: 10px;
            overflow: hidden;

            .modal-header {
                background-color: #8d8d8d;
                border-radius: 0;
                width: 100%;

                h4 {
                    font-size: 30px;
                }
            }

            .modal-body {
                p {
                    font-size: 17px;
                    margin-bottom: 5px;
                }

                input {
                    border: 1px solid black;
                    border-radius: 15px;
                    padding: 5px 10px;
                    margin-bottom: 10px;

                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                }
            }

            .modal-footer {
                button {
                    border-radius: 15px;
                    padding: 5px 10px;
                    background-color: $color-orange-0;
                    border: 1px solid $color-orange-0;
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .login {
        .login__content {
            .login__left {
                position: relative;

                img {
                    height: 100vh;
                }

                .pageLogo {
                    i {
                        display: none;
                    }
                }
            }

            .login__right {
                position: absolute;
                height: 100vh;
                width: 100%;
                left: 0;

                .loginForm {
                    width: 65%;

                    h1 {
                        color: white;
                        font-size: 40px;
                        margin-bottom: 15px;
                    }

                    #userTypeTab {
                        .nav-item {
                            .active {
                                background-color: rgba(255, 255, 255, 0);
                            }

                            a {
                                border: 0;
                                color: white;

                                &:active:focus {
                                    color: $color-orange-0;
                                }
                            }
                        }
                    }

                    .userLoginForm {
                        p {
                            color: white;

                            a {
                                color: $color-orange-0;
                                font-size: 15px;
                            }
                        }
                    }
                }

                #createAccount {
                    font-size: 15px;
                    color: white;

                    &:hover {
                        color: $color-orange-0;
                    }
                }
            }

            #signUpModal {
                .modal-dialog {
                    margin-left: 30px;
                    margin-right: 30px;
                }
            }
        }
    }
}

@media screen and (min-width: 576px) and (max-width: 768px) {

    .login {
        .login__content {
            .login__left {
                position: relative;

                img {
                    height: 100vh;
                }

                .pageLogo {
                    i {
                        font-size: 150px;
                    }
                }
            }

            .login__right {
                height: 100vh;
                width: 100%;

                .loginForm {
                    width: 50%;

                    h1 {
                        color: black;
                        font-size: 30px;
                        margin-bottom: 10px;
                    }

                    #userTypeTab {
                        .nav-item {
                            .active {
                                background-color: rgba(255, 255, 255, 0);
                            }

                            a {
                                border: 0;
                                font-size: 12px;
                                padding: 5px 10px;
                                color: black;

                                &:active:focus {
                                    color: $color-orange-0;
                                }
                            }
                        }
                    }

                    .userLoginForm {
                        p {
                            color: white;

                            a {
                                color: $color-orange-0;
                                font-size: 15px;
                            }
                        }

                        #userName,
                        #password,
                        #relativeName,
                        #relativeEmail {
                            padding: 5px 10px;
                        }

                        button {
                            margin-top: 10px;
                            padding: 5px 10px;
                        }

                        p {
                            color: black;
                            font-size: 10px;

                            a {
                                font-size: 10px;
                            }
                        }
                    }
                }

                #createAccount {
                    font-size: 15px;
                    color: black;

                    &:hover {
                        color: $color-orange-0;
                    }
                }
            }

            #signUpModal {
                .modal-dialog {
                    margin-left: 30px;
                    margin-right: 30px;
                }
            }
        }
    }
}
</style>
