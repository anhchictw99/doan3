<template>
<div class="Witnesses">
    <div class="Will">
    <section class="yourWill">
        <div class="yourWill__content text-center">
         <div class="forthPage yourWillPage">
                <h1>Witnesses</h1>
                <p>After you finish filling out your will, we will email you the steps to make it legally binding.
                    One of those steps is to sign the printed document and have it witnessed by two people and
                    notarized if you choose.</p>
                <hr>
                <h3>Would you like us to email you and your two potential witnesses to get the ball rolling?</h3>
                <p>Optional but recommended. Witnesses should be over the age of 18 and not otherwise named in your
                    will.</p>
                <h3>Witnesses 1 Email</h3>
                <input type="text" name="fd" id="1" placeholder="Email address">
                <h3>Witnesses 2 Email</h3>
                <input type="text" name="fdfd" id="2" placeholder="Email address">
                <h3>Want to include a custom message?</h3>
                <textarea type="text" v-model="will"  cols="30" rows="10"></textarea>
                <div class="btn-group">
                <a href="#" class="btn btn-primary" @click="createWill">ADD</a>
                <a href="#" class="btn btn-default" onclick="MyFunction();return false;">Payment</a>
                </div>
           
            
          </div>
        </div>
    </section>
    </div>
</div>
</template>

<script>
export default {
    name: 'Witnesses',
    props: {
        msg: String
    },
    data(){
      return {
          
         
          will:'',
          

      }
  },
  methods:{
      createWill(){
          var data= {
              will: this.will,
              
          }
          this.$store.dispatch('createWill',data)
      },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@mixin colorSection {
    display: block;
    width: 100%;
    height: 40px;
    background-color: $color-orange-0;
}

@mixin yourWillh1 {
    margin: 0px 0px 24px;
    text-align: center;
    font-size: 42px;
    line-height: 48px;
    font-weight: bold;
    letter-spacing: 0.5px;
}

@mixin yourWillp {
    margin: 0px 0px 24px;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
}

@mixin yourWillh3 {
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    text-transform: none;
    letter-spacing: 0.5px;
    margin: 0px;
}

@mixin yourWillinput {
    border-radius: 10px;
    display: block;
    background-color: #eeeeee;
    border-radius: 10px;
    width: 100%;
    border: 2px solid black;
    font-size: 16px;
    line-height: 21px;
    padding: 10px 15px 10px;
    margin-top: 20px;

    &:focus {
        outline: none;
        box-shadow: none;
    }
}

@mixin nextButton {
    margin: 40px auto;
    display: block;
    padding: 10px 20px;
    color: black;
    background-color: #eeeeee;
    border-radius: 10px;
    border: 2px solid black;

    &:focus {
        box-shadow: none;
        outline: none;
    }
}

@mixin selectOption {
    width: 100%;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #eeeeee;

    &:focus {
        box-shadow: none;
        outline: none;
    }
}

@mixin radioOption {
    display: flex;
    border-radius: 10px;
    align-items: center;
    border: 2px solid black;
    margin-bottom: 5px;
    padding: 5px 0;

    input {
        margin: 0;
        height: 20px;
        width: 10%;
        display: inline;
    }

    label {
        margin: 0;
    }
}

$color-orange-0: #f9a825;

.yourWill {
    background-image: url(./../../public/img/anh-nen-toi-hoa-van-cho-dien-thoai_101025691.jpg);
    padding: 0 300px;

    .yourWill__content {
        padding-top: 100px;

        .colorSection {
            @include colorSection;
        }

        h1 {
            @include yourWillh1;
            margin-top: 50px;
        }

        h3 {
            @include yourWillh3;
            margin-top: 50px;
        }

        .radioh3 {
            @include yourWillh3;
        }

        p {
            @include yourWillp;
            margin-top: 50px;
        }

        input {
            @include yourWillinput;
        }

        button {
            @include nextButton;
        }

        select {
            @include selectOption;
        }

        .radioOption {
            @include radioOption;
        }

        textarea {
            width: 100%;
        }

        #account,
        #hasChild,
        #guardian,
        #yesAlternate,
        #personalAlternate,
        #haveRequests {
            border: 2px solid black;
            margin-top: 60px;
            padding: 20px;
            padding-top: 50px;
            border-radius: 10px;
            position: relative;

            h3 {
                @include yourWillh3;
                position: absolute;
                background-color: white;
                top: 0;
                left: 50%;
                transform: translate(-50%, -50%);
                border: 2px solid black;
                padding: 10px;
                width: 30%;
            }
        }

        .yourWillPage {
            // border-radius: 10px;
            border: 2px solid black;
            padding: 0 150px;
            background-color: white;
            margin-bottom: 20px;

            #childrenTab,
            #guardianPersonal,
            #alternateGuardian,
            #personalGuardian,
            #requests {
                border: 0;

                li {
                    padding: 5px;
                    width: 50%;

                    a {
                        border: 2px solid black;
                        color: black;
                    }

                    .active {
                        background-color: #eeeeee;
                    }
                }
            }
        }
    }
}
</style>
