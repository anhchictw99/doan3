<template>
<div class="HContact">
    <section class="contact" id="contactSection">
        <div class="contact__content container">
            <h1>Contact Us</h1>
            <div class="contact__form">
                <form action="#" id="contactForm">
                    <div class="contact__form__left">
                        <div class="contact__row row">
                            <div class="contact__form__item col-12 col-sm-12 col-md-12 col-lg-6">
                                <input type="text" placeholder="Name" name="" id="" required />
                            </div>
                            <div class="contact__form__item col-12 col-sm-12 col-md-12 col-lg-6">
                                <input type="text" placeholder="Last Name" name="" id="" required />
                            </div>
                            <div class="contact__form__item col-12 col-sm-12 col-md-12 col-lg-6">
                                <input type="email" placeholder="Email" name="" id="" required />
                            </div>
                            <div class="contact__form__item col-12 col-sm-12 col-md-12 col-lg-6">
                                <input type="tel" placeholder="Phone" name="" id="" required />
                            </div>
                        </div>
                    </div>
                    <div class="contact__form__right">
                        <textarea placeholder="Message" name="" id="" cols="30" rows="7"></textarea>
                        <button class="btn btnSubmit">Submit</button>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.232428815172!2d106.8016140504559!3d10.869918392220137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiDEkEhRRyBUUC5IQ00!5e0!3m2!1svi!2s!4v1602845771841!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'HContact',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$color-orange-0: #f9a825;

.contact {
    .contact__content {
        h1 {
            display: block;
            font-size: 50px;
            color: black;
            text-align: center;
            margin-bottom: 20px;
        }

        .contact__form {
            #contactForm {
                .contact__form__left {
                    .contact__form__item {
                        input {
                            width: 100%;
                            height: 40px;
                            margin-bottom: 15px;
                            border-radius: 5px;
                            padding: 0 10px;
                            border: 2px solid black;
                            color: $color-orange-0;

                            &:focus {
                                box-shadow: none;
                                outline: none;
                            }
                        }
                    }
                }

                .contact__form__right {
                    textarea {
                        width: 100%;
                        border-radius: 5px;
                        padding: 0 10px;
                        border: 2px solid black;
                        margin-bottom: 15px;
                    }

                    button {
                        width: 100%;
                        background-color: $color-orange-0;
                        border-radius: 5px;
                        font-size: 20px;
                        margin-bottom: 20px;
                    }
                }
            }

            iframe {
                width: 100%;
                border-radius: 5px;
                border: 2px solid black;
            }
        }
    }
}

@media screen and (max-width: 575px) {
    .contact {
        .contact__content {
            h1 {
                font-size: 35px;
            }
        }
    }
}

@media screen and (min-width: 992px) {
    .contact {
        .contact__content {
            h1 {
                font-size: 70px;
            }
        }
    }
}
</style>
