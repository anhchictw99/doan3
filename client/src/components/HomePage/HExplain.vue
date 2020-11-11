<template>
<div class="HExplain">
    <section class="explain">
        <div class="explain__content container">
            <div class="explain__row row">
                <div class="explain__left__col col-5 col-sm-5 col-lg-6">
                    <h1>What is a will ?</h1>
                </div>
                <div class="explain__right__col col-7 col-sm-7 col-lg-6">
                    <div class="explain__right__content">
                        <p>
                            A will is a legal document that states how your affairs will be handled after you die. A basic will designates who will receive your property, appoints a guardian for your minor children, and names an executor to manage your estate.
                        </p>
                        <button id="getWill">
                            <a href="#">Get your will</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'HExplain',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$color-orange-0: #f9a825;

.explain {
    .explain__content {
        display: block;
        padding: 200px 0;

        .explain__row {
            .explain__left__col {
                h1 {
                    margin: 0px 0px 18px;
                    text-align: left;
                    font-size: 70px;
                    font-weight: 600;
                }
            }

            .explain__right__col {
                position: relative;

                .explain__right__content {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);

                    p {
                        display: block;
                        align-items: center;
                        margin: 0px 0px 18px;
                        text-align: left;
                        font-size: 18px;
                        line-height: 26px;
                        font-weight: 200;
                    }

                    button {
                        padding: 10px 20px;
                        background-color: #fff;
                        border-radius: 5px;
                        transition: 0.2s all;
                        border: 2px solid $color-orange-0;

                        a {
                            color: black;
                            font-weight: 600;
                            text-decoration-line: none;
                        }

                        &:hover {
                            background-color: $color-orange-0;

                            a {
                                color: white;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .explain {
        .explain__content {
            display: block;
            padding: 100px 20px;
            margin: 70px 0;

            .explain__row {
                .explain__left__col {
                    h1 {
                        font-size: 35px;
                    }
                }

                .explain__right__col {
                    .explain__right__content {
                        p {
                            font-size: 15px;
                        }

                        button {
                            padding: 8px 15px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .explain {
        .explain__content {
            display: block;
            padding: 100px 50px;

            .explain__row {
                .explain__left__col {
                    h1 {
                        font-size: 50px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 992px) {
    .explain {
        .explain__content {
            display: block;
            padding: 100px 0;

            .explain__row {
                .explain__left__col {
                    h1 {
                        font-size: 75px;
                    }
                }

                .explain__right__col {
                    .explain__right__content {
                        p {
                            font-size: 20px;
                        }

                        button {
                            padding: 10px 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>
