<template>
<div class="HHeader">
    <header>
        <div class="header__content">
            <nav class="navbar navbar-default navbar-expand-lg navbar-fixed-top">
                <a class="navbar-brand header__left" href="#">
                    <h1>TESTAMENT</h1>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item header__right">
                            <img src="./../../../public/img/avatar.png" alt="" />
                            <button class="btn btn-secondary btn-logout" id="btnLogout" @click="logOut">LOGOUT</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</div>
</template>

<script>
export default {
    name: 'HHeader',
    props: {
        msg: String
    },
    methods:{
      userLogin(){
          var data= {
              username: this.username,
              password:this.password

          }
          this.$store.dispatch('userLogin',data)
      },
      logOut(){
           localStorage.removeItem("token");
           this.$router.push("/login");
      }
     
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$color-orange-0: #f9a825;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

body {
    min-height: 200vh;
}

.navbar-default {
    transition: 500ms ease;
    background: transparent;
}

.navbar-default.scrolled {
    box-shadow: 0 0 15px rgba(0, 0, 0, .3);
    background: rgba(255, 255, 255, 0.85);
}

header {
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);

    .header__content {
        position: relative;

        .navbar {
            padding: 10px 40px;

            .navbar-brand {
                h1 {
                    margin: 0;
                    font-size: 40px;
                    color: $color-orange-0;
                }
            }

            #navbarSupportedContent {
                position: relative;

                .header__right {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);

                    img {
                        height: auto;
                        width: 30px;
                        border-radius: 25px;
                        margin-right: 5px;
                        cursor: pointer;
                    }

                    button {
                        color: white;
                        position: relative;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    header {
        .header__content {
            .navbar {
                padding: 10px;

                .navbar-brand {
                    h1 {
                        font-size: 20px;
                    }

                    p {
                        font-size: 10px;
                    }
                }
            }
        }
    }
}
</style>
