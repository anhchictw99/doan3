<template>
<div class="HFooter">
    <footer>
        <div class="footer__content container">
            <h1>TESTAMENT</h1>
            <div class="footer__row row">
                <div class="footer__col col-4">
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Accidental death insurance</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col col-4">
                    <ul>
                        <li>
                            <a href="#">Carrers</a>
                        </li>
                        <li>
                            <a href="#">Our Blog</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col col-4">
                    <ul>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">IOS / Android</a>
                        </li>
                        <li>
                            <a href="#">Legal</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col col-3"></div>
            </div>
        </div>
    </footer>

</div>
</template>

<script>
export default {
    name: 'HFooter',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$color-orange-0: #f9a825;

footer {
    text-align: left;
    display: block;
    width: 100%;
    margin-top: 50px;
    background-color: rgb(43, 43, 43);
    padding: 20px 0;

    .footer__content {
        h1 {
            display: block;
            text-align: left;
            margin: 20px 0;
            font-size: 40px;
            color: $color-orange-0;
        }

        .footer__row {
            .footer__col {
                ul {
                    list-style-type: none;

                    li {
                        margin-bottom: 10px;

                        a {
                            text-decoration-line: none;
                            color: white;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 575px) {
    footer {
        .footer__content {
            h1 {
                font-size: 35px;
            }

            .footer__row {
                .footer__col {
                    ul {
                        li {
                            a {
                                font-size: 17px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
