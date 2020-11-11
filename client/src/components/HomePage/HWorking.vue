<template>
<div class="HWorking">
    <section class="working">
        <h1 id="workingTitle">HOW IT WORK ?</h1>
        <div class="working__content container">
            <div class="working__row row">
                <div class="working__col working__left__col col-0 col-sm-0 col-md-0 col-lg-4">
                    <div class="left__col__content">

                    </div>
                </div>
                <div class="working__col working__right__col col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="working__step">
                        <h1>Answer a few simple questions</h1>
                        <p>Wondering how to make a will for free? It only takes about five minutes with Fabric. Can't find five minutes for yourself? Come back and finish any time.</p>
                    </div>
                    <div class="working__step">
                        <h1>Make your will legally binding</h1>
                        <p>A printer, a pen, two witnesses. We'll walk you through it when the time comes.</p>
                    </div>
                    <div class="working__step">
                        <h1>Share with key players</h1>
                        <p>Share details about your decisions with your trusted contacts right from the app, so they know what to do. And don't worry - you control who sees what.</p>
                    </div>
                    <div class="working__button">
                        <a href="#">GET IT DONE</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'HWorking',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.working {
    padding: 150px 0;
    margin: 200px 0;
    background-color: #bcbcbc;
    text-align: left;

    #workingTitle {
        font-size: 70px;
        font-weight: 600;
        margin-left: 100px;
    }

    .working__content {
        .working__left__col {
            text-align: left;
        }

        .working__right__col {
            padding-left: 100px;

            .working__step {
                h1 {
                    max-width: 256px;
                    font-size: 30px;
                    line-height: 36px;
                    font-weight: 600;
                    text-transform: none;
                    letter-spacing: 0px;
                    margin-bottom: 20px;
                }

                p {
                    text-align: left;
                    font-size: 18px;
                    line-height: 26px;
                    font-weight: 200;
                    text-transform: none;
                }
            }

            .working__button {
                border: 2px solid black;
                display: flex;
                margin-top: 30px;
                justify-content: center;
                padding: 10px 20px;
                width: 40%;

                a {
                    font-size: 13px;
                    font-weight: bold;
                    color: black;
                    text-decoration-line: none;
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .working {
        padding: 70px 0;
        margin: 70px 0;

        #workingTitle {
            font-size: 35px;
            font-weight: 600;
            margin: 0;
            padding-left: 50px;
            margin-bottom: 50px;
        }

        .working__content {
            .working__right__col {
                padding: 0;
                padding: 0 50px;

                .working__step {
                    h1 {
                        font-size: 27px;
                        margin-bottom: 10px;
                    }

                    p {
                        font-size: 17px;
                    }
                }

                .working__button {
                    margin: 0;
                    width: 60%;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .working {
        margin: 70px 0;
        padding: 100px 0;

        #workingTitle {
            margin: 0;
            font-size: 50px;
            padding-left: 70px;
            margin-bottom: 20px;
        }

        .working__content {
            .working__right__col {
                padding: 0;
                padding: 0 50px;

                .working__step {
                    h1 {
                        font-size: 30px;
                        margin-bottom: 15px;
                    }

                    p {
                        font-size: 20px;
                    }
                }

                .working__button {
                    margin: 0;
                    width: 50%;

                    a {
                        font-size: 20px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 992px) {
    .working {
        margin: 100px 0;
        padding: 100px 0;

        #workingTitle {
            margin-bottom: 50px;
        }

        .working__content {
            .working__right__col {
                .working__step {
                    h1 {
                        font-size: 35px;
                        max-width: 400px;
                        margin: 0;
                        margin-bottom: 25px;
                    }

                    p {
                        font-size: 25px;
                        margin-bottom: 50px7vy;
                    }
                }

                .working__button {
                    margin: 0;
                    width: 50%;

                    a {
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>
