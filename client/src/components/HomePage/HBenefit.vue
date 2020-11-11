<template>
<div class="HBenefit">
    <section class="benefit">
        <div class="benefit__content container">
            <div class="our__benefit row text-center">
                <div class="benefit__col col-12 col-md-4">
                    <img src="./../../../public/img/avatar.png" alt="">
                    <div class="benefit__title">
                        <h1>Appoint a guardian & beneficiary</h1>
                    </div>
                    <p>Your kids are the most important thing in your life, and this helps ensure they are taken care of by people you choose.</p>
                </div>
                <div class="benefit__col col-12 col-md-4">
                    <img src="./../../../public/img/avatar.png" alt="">
                    <div class="benefit__title">
                        <h1>Mirror your will with your spouse</h1>
                    </div>
                    <p>Create two free online wills at once with common wishes for your spouse and yourself, without doing twice the work.</p>
                </div>
                <div class="benefit__col col-12 col-md-4">
                    <img src="./../../../public/img/avatar.png" alt="">
                    <div class="benefit__title">
                        <h1>Final arrangements</h1>
                    </div>
                    <p>Putting your final arrangements in writing helps make a difficult time a little less stressful for your loved ones.</p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'HBenefit',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$color-orange-0: #f9a825;

.benefit {
    .benefit__content {
        .our__benefit {
            .benefit__col {
                padding: 20px;

                img {
                    height: 170px;
                    width: 170px;
                    border-radius: 50%;
                    border: 2px solid $color-orange-0;
                    margin: 0;
                }

                .benefit__title {
                    h1 {
                        font-size: 30px;
                        color: black;
                        font-weight: 600;
                        line-height: 36px;
                        margin-top: 50px;
                    }
                }

                p {
                    font-size: 18px;
                    font-weight: 200;
                    line-height: 26px;
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .benefit {
        .benefit__content {
            .our__benefit {
                .benefit__col {
                    img {
                        height: 120px;
                        width: 120px;
                    }

                    .benefit__title {
                        h1 {
                            font-size: 27px;
                            margin-top: 20px;
                        }
                    }

                    p {
                        font-size: 17px;
                        margin: 0;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
    .benefit {
        .benefit__content {
            .our__benefit {
                .benefit__col {
                    img {
                        height: 150px;
                        width: 150px;
                    }

                    .benefit__title {
                        h1 {
                            margin-top: 30px;
                        }
                    }

                    p {
                        font-size: 20px;
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>
