<template>
<div class="HCreateWill">
    <section class="createWill">
        <div class="container">
            <div class="createWill__content">
                <h1>ARE WE THERE YET ?</h1>
                <p>You're just a few minutes away from crossing a will off your to-do list for good.</p>
                <a>CREATE YOUR WILL <i class="fa fa-long-arrow-alt-right"></i></a>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'HCreateWill',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$color-orange-0: #f9a825;

.createWill {
    display: block;
    width: 100%;
    margin: 200px 0;
    background-color: $color-orange-0;

    .container {
        padding-top: 100px;
        padding-bottom: 100px;

        .createWill__content {
            display: block;
            width: 100%;
            text-align: center;

            h1 {
                font-size: 70px;
                // line-height: 84px;
                font-weight: 600;
                margin-bottom: 25px;
            }

            p {
                font-size: 18px;
                line-height: 26px;
                font-weight: 200;
                margin-bottom: 40px;
            }

            a {
                font-size: 13px;
                line-height: 19px;
                font-weight: bold;
                padding: 20px 40px;
                border: 2px solid black;
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .createWill {
        margin: 70px 0;

        .container {
            .createWill__content {
                h1 {
                    font-size: 35px;
                }

                p {
                    font-size: 17px;
                }

                a {
                    padding: 15px 30px;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .createWill {
        margin: 70px 0;

        .container {
            .createWill__content {
                h1 {
                    font-size: 50px;
                }

                p {
                    font-size: 20px;
                }
            }
        }
    }
}

@media screen and (min-width: 992px) {
    .createWill {
        margin: 100px 0;

        .container {
            .createWill__content {
                p {
                    font-size: 25px;
                }
            }
        }
    }
}
</style>
