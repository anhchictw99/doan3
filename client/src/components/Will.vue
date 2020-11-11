<template>
<div class="Will">
    <section class="yourWill">
        <div class="yourWill__content text-center">
            <div class="colorSection"></div>
            <div class="firstPage yourWillPage">
                <h1>GET STARTED</h1>
                <p>
                    Congrats! You’re on your way. We’ll walk you through how
                    to create a will in minutes and show you how to make it
                    official. Let's get started with some basic info.
                </p>
                <hr />
                <div class="legalName">
                    <h3>Legal Name</h3>
                    <input type="text" name="" id="legalFirstName" placeholder="Firstname" />
                    <input type="text" name="" id="legalLastName" placeholder="Lastname" />
                </div>
                <div class="account" id="account">
                    <h3>Account</h3>
                    <p>
                        You are signed in with the email address below. If
                        you want to sign in with a different account, please
                        <a href="#">sign out</a> first.
                    </p>
                    <input type="text" name="" id="accountEmail" placeholder="Your email..." />
                </div>
                <div class="dateOfBirth">
                    <h3>Date of birth</h3>
                    <div class="birthRow row">
                        <div class="dateBirth__col col-4">
                            <select name="month" id="month">
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                        <div class="dateBirth__col col-4">
                            <select name="day" id="day">
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div class="dateBirth__col col-4">
                            <select name="year" id="year">
                                <option value="">2000</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="homeAddress">
                    <h3>Home address</h3>
                    <p>No P.O. boxes, please.</p>
                    <input type="text" name="" id="userAddress" placeholder="Your address ..." />
                    <div class="cityState">
                        <input type="text" name="" id="city" placeholder="Your city" />
                        <input type="text" name="" id="state" />
                    </div>
                    <input type="text" name="" id="zipCode" placeholder="Zip code" />
                </div>
                <div class="phoneNumber">
                    <h3>Phone number</h3>
                    <input type="text" name="" id="phoneNumber" placeholder="Your phone number" />
                </div>
                <button>Next <i class="fa fa-arrow-right"></i></button>
            </div>
            <div class="colorSection"></div>
            <div class="secondPage yourWillPage">
                <h1>The Will</h1>
                <p>
                    Designate guardians for your children, beneficiaries and
                    bequests of your estate, and executors for your Last
                    Will and Testament.
                </p>
                <hr />
                <h3>Do you have children under the age of 18?</h3>
                <ul class="nav nav-tabs" id="childrenTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="legator-tab" data-toggle="tab" href="#firstChild" role="tab" aria-controls="home" aria-selected="true">
                            YES
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="relative-tab" data-toggle="tab" href="#noChild" role="tab" aria-controls="profile" aria-selected="false">
                            NO
                        </a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="userLoginForm tab-pane fade show active" id="firstChild" role="tabpanel" aria-labelledby="home-tab">
                        <div class="hasChild" id="hasChild">
                            <h3>CHILD</h3>
                            <p>Child's legal name</p>
                            <input type="text" name="" id="" placeholder="First name" />
                            <input type="text" name="" id="" placeholder="Last name" />
                        </div>
                        <div class="beneficiaries">
                            <h3>
                                Please select how you'd like your estate to
                                be left to your beneficiaries.
                            </h3>
                            <div class="radioCheck">
                                <div class="radioOption">
                                    <input type="radio" name="beneficiaries" id="check1" />
                                    <label for="check1">
                                        <h3 class="radioh3">
                                            Spouse then children equally
                                        </h3>
                                    </label>
                                </div>
                                <div class="radioOption">
                                    <input type="radio" name="beneficiaries" id="check2" />
                                    <label for="check2">
                                        <h3 class="radioh3">Children equally</h3>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="guardian" id="guardian">
                            <h3>GUARDIAN</h3>
                            <p>
                                In the event of the passing of all legal
                                parents, a guardian is legally responsible
                                for the child's welfare including food,
                                shelter, health, and schooling, until he or
                                she reaches 18 years of age.
                            </p>
                            <p>
                                Legal name of the person you designate as
                                your children’s guardian
                            </p>
                            <input type="text" name="" id="" placeholder="First name" />
                            <input type="text" name="" id="" placeholder="Last name" />
                            <p>
                                Is your relationship to this guardian
                                personal or professional?
                            </p>
                            <p>
                                We'll suggest ways to discuss your will with
                                them accordingly. Look for this in the
                                Messages section of your Fabric will kit.
                            </p>
                            <ul class="nav nav-tabs" id="guardianPersonal" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="personal-tab" data-toggle="tab" href="#personalGuardian" role="tab" aria-controls="home" aria-selected="true">
                                        Personal
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="professional-tab" data-toggle="tab" href="#professionalGuardian" role="tab" aria-controls="profile" aria-selected="false">
                                        Professional
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane container active" id="personalGuardian">
                                    <p>
                                        What is your personal relationship
                                        to this guardian?
                                    </p>
                                    <select name="" id="">
                                        <option value="">
                                            Select an option
                                        </option>
                                    </select>
                                </div>
                                <div class="tab-pane container fade" id="professionalGuardian"></div>
                            </div>
                            <p>
                                Send this will to the designated guardian?
                            </p>
                            <p>
                                Optional but recommended. Your guardian
                                plays an important role. This can get them
                                useful info they'll need if the time comes.
                            </p>
                            <input type="text" name="" id="" placeholder="Email address" />
                        </div>
                    </div>
                    <div class="userLoginForm tab-pane fade" id="noChild" role="tabpanel" aria-labelledby="profile-tab">
                        <h3>
                            Legal name of the beneficiary to whom you want
                            to leave your estate
                        </h3>
                        <input type="text" name="" id="" placeholder="First name" />
                        <input type="text" name="" id="" placeholder="Last name" />
                    </div>
                </div>

                <h3>Do you wish to specify an alternate guardian?</h3>
                <p>
                    An alternate guardian would become your children's
                    guardian in the event that the primary person chosen is
                    unwilling or unable to take on the role.
                </p>
                <ul class="nav nav-tabs" id="alternateGuardian" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="legator-tab" data-toggle="tab" href="#yesAlternate" role="tab" aria-controls="home" aria-selected="true">
                            YES
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="relative-tab" data-toggle="tab" href="#noAlternate" role="tab" aria-controls="profile" aria-selected="false">
                            NO
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane container active" id="yesAlternate">
                        <h3>ALTERNATE GUARDIAN</h3>
                        <p>
                            Legal name of the person you designate as your
                            children’s alternate guardian
                        </p>
                        <input type="text" name="" id="" placeholder="First name" />
                        <input type="text" name="" id="" placeholder="Last name" />
                        <p>
                            Is your relationship to this alternate guardian
                            personal or professional?
                        </p>
                        <p>
                            We'll suggest ways to discuss your will with
                            them accordingly. Look for this in the Messages
                            section of your Fabric will kit.
                        </p>
                        <ul class="nav nav-tabs" id="personalGuardian" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="legator-tab" data-toggle="tab" href="#personalAlternate" role="tab" aria-controls="home" aria-selected="true">
                                    Personal
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="relative-tab" data-toggle="tab" href="#professionalAlternate" role="tab" aria-controls="profile" aria-selected="false">
                                    Professional
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane container active" id="personalAlternate">
                                <p>
                                    What is your personal relationship to
                                    this alternate guardian?
                                </p>
                                <select name="" id="">
                                    <option value="">
                                        Select an option
                                    </option>
                                </select>
                                <p>
                                    Send this will to the designated
                                    alternate guardian?
                                </p>
                                <p>
                                    Optional but recommended. The alternate
                                    guardian is as important a role as the
                                    primary guardian. This can get them
                                    useful info they'll need if the time
                                    comes.
                                </p>
                                <input type="text" name="" id="" placeholder="Email address" />
                            </div>
                            <div class="tab-pane container fade" id="professionalAlternate"></div>
                        </div>
                    </div>
                    <div class="tab-pane container fade" id="noAlternate"></div>
                    <h3>
                        Do you want to include one or more bequests in your
                        will?
                    </h3>
                    <ul class="nav nav-tabs" id="bequests" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="legator-tab" data-toggle="tab" href="#yesBequests" role="tab" aria-controls="home" aria-selected="true">
                                YES
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="relative-tab" data-toggle="tab" href="#noBequests" role="tab" aria-controls="profile" aria-selected="false">
                                NO
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="colorSection"></div>
            <div class="thirdPage yourWillPage">
                <h1>Final Arrangements</h1>
                <p>
                    Inform your loved ones of certain things that you’d like
                    done at the time of your passing. Please note that this
                    section cannot be made legally binding.
                </p>
                <hr />
                <div class="wishes">
                    <h3>
                        What are your wishes for your final resting place or
                        arrangements?
                    </h3>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="wishes1" />
                        <label for="wishes1">
                            <h3 class="radioh3">Cremation</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="wishes2" />
                        <label for="wishes2">
                            <h3 class="radioh3">Donate Body To Science</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="wishes3" />
                        <label for="wishes3">
                            <h3 class="radioh3">Ground Burial</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="wishes4" />
                        <label for="wishes4">
                            <h3 class="radioh3">Let Family Decide</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="wishes5" />
                        <label for="wishes5">
                            <h3 class="radioh3">Mausoleum Burial</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="wishes6" />
                        <label for="wishes6">
                            <h3 class="radioh3">Something Else</h3>
                        </label>
                    </div>
                </div>
                <div class="ceremony">
                    <h3>
                        What kind of ceremony do you wish to have?
                    </h3>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="ceremony1" />
                        <label for="ceremony1">
                            <h3 class="radioh3">No Ceremony</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="ceremony2" />
                        <label for="ceremony2">
                            <h3 class="radioh3">Let My Family Decide</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="ceremony3" />
                        <label for="ceremony3">
                            <h3 class="radioh3">Funeral</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="ceremony4" />
                        <label for="ceremony4">
                            <h3 class="radioh3">Memorial</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="ceremony5" />
                        <label for="ceremony5">
                            <h3 class="radioh3">Funeral and Memorial</h3>
                        </label>
                    </div>
                    <div class="radioOption">
                        <input type="radio" name="beneficiaries" id="ceremony6" />
                        <label for="ceremony6">
                            <h3 class="radioh3">Something Else</h3>
                        </label>
                    </div>
                </div>
                <h3>Do you have any special requests for your final resting place or your ceremony?</h3>
                <p>For example, you may request to have certain songs played at your ceremony, ask for a tree to be
                    planted where your ashes will be spread, or have people donate to an organization of your choice
                    instead of sending flowers for the funeral.</p>
                <ul class="nav nav-tabs" id="requests" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="legator-tab" data-toggle="tab" href="#haveRequests" role="tab" aria-controls="home" aria-selected="true">
                            YES
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="relative-tab" data-toggle="tab" href="#noRequests" role="tab" aria-controls="profile" aria-selected="false">
                            NO
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane container active" id="haveRequests">
                        <h3>SPECIAL REQUESTS</h3>
                        <p>What type of special requests do you have?</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="tab-pane container fade" id="noRequests">...</div>
                </div>
            </div>
            <div class="colorSection"></div>
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
                <input type="text" name="" id="" placeholder="Email address">
                <h3>Witnesses 2 Email</h3>
                <input type="text" name="" id="" placeholder="Email address">
                <h3>Want to include a custom message?</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Will',
    props: {
        msg: String
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
