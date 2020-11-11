<template>
<div class="HBanner">
    <section class="banner">
        <div class="banner__content container">
            <div class="banner__row row">
                <div class="banner__col col-12 col-sm-12 col-md-10 col-lg-9">
                    <h1>
                        Plan for the unpredictable with a will
                    </h1>
                    <p>Create free wills online for you and your spouse and name a guardian for your kids in about 5 minutes. Then, make it legally binding.</p>
                    <button id="createWill">
                        <a href="http://localhost:8081/#/witnesses">CREATE A WILL</a>
                    </button>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'HBanner',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
$color-orange-0: #f9a825;

.banner {
    height: 700px;
    display: flex;
    align-items: center;
    background-image: url(./../../../public/img/b1.jpg);

    .banner__content {
        text-align: left;

        .banner__col {
            h1 {
                font-size: 80px;
                font-weight: 600;
                color: white;
                margin-bottom: 20px;
            }

            p {
                text-align: left;
                font-size: 18px;
                line-height: 26px;
                font-weight: 200;
                color: white;
                margin-bottom: 30px;
            }

            #createWill {
                border: 0;
                display: inline;
                padding: 10px 20px;
                border-radius: 20px;
                background-color: $color-orange-0;

                a {
                    text-align: center;
                    text-decoration-line: none;
                    color: white;
                    font-size: 20px;
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .banner {
        .banner__content {
            .banner__col {
                h1 {
                    font-size: 35px;
                }

                #createWill {
                    a {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 576px) and (max-width: 768px) {
    .banner {
        .banner__content {
            .banner__col {
                h1 {
                    font-size: 50px;
                }
            }
        }
    }
}
</style>
