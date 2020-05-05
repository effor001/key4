<template>
    <div class="contactForm page">
        <div class="header">
            <img src="../assets/contact.svg" alt="" class="title" id="top">
            <h3>{{contents()}}</h3>
            <p v-if="flag === 1">ご意見・ご相談、料金のお見積もりなど、お気軽にお問合わせください。<br>
                お問合せ内容の確認後、担当者よりご連絡させていただきます。</p>
            <p v-else-if="flag === 2">以下の入力内容をご確認の上、間違いがなければ「送信する」ボタンを押してください。<br>
                内容を訂正する場合は「戻る」ボタンで前のページへお戻りください。</p>
            <p v-else>お問い合わせ内容を受け付けました。<br>
                2~3営業日以内に担当者よりご連絡させて頂きます。</p>
            <div class="formFlow">
                <div v-if="flag === 1" :class="{'stepBoxActive': isActive, 'stepBoxNonActive': !isActive}">
                    <p class="stepNumber">STEP 01</p>
                    <p class="stepName">項目の入力</p>
                </div>
                <div v-else :class="{'stepBoxActive': !isActive, 'stepBoxNonActive': isActive}">
                    <p class="stepNumber">STEP 01</p>
                    <p class="stepName">項目の入力</p>
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" />
                </div>
                <div v-if="flag === 2" :class="{'stepBoxActive': isActive, 'stepBoxNonActive': !isActive}">
                    <p class="stepNumber">STEP 02</p>
                    <p class="stepName">入力内容の確認</p>
                </div>
                <div v-else :class="{'stepBoxActive': !isActive, 'stepBoxNonActive': isActive}">
                    <p class="stepNumber">STEP 02</p>
                    <p class="stepName">入力内容の確認</p>
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" />
                </div>
                <div v-if="flag === 3" :class="{'stepBoxActive': isActive, 'stepBoxNonActive': !isActive}">
                    <p class="stepNumber">STEP 03</p>
                    <p class="stepName">送信完了</p>
                </div>
                <div v-else :class="{'stepBoxActive': !isActive, 'stepBoxNonActive': isActive}">
                    <p class="stepNumber">STEP 03</p>
                    <p class="stepName">送信完了</p>
                </div>
            </div>
        </div>
        <div class="formList" v-if="flag != 3">
            <form method="post" action="" @submit="sendEmail">
                <div v-if="errors.length" class="errorSection">
                    <b>下記の項目は必須項目です:</b>
                    <ul>
                        <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                    </ul>
                </div>
                <div class="contentsName section">
                    <label for="subject">SUBJECT</label>
                    <input v-if="flag === 1" :value="contents()" name="subject" id="subject" readonly>
                    <input v-if="flag === 2" :value="contents()" name="subject" id="subject" readonly>
                </div>
                <div class="companyName section">
                    <label for="companyName"><span v-if="flag === 1"
                            class="need">必須</span>COMPANY</label>
                    <input v-if="flag === 1" v-model="companyName" type="text" placeholder="KEY4d LAB."
                        name="companyName" id="companyName" required>
                    <input v-if="flag === 2" :value="companyName" type="text" name="companyName" id="companyName"
                        readonly>
                </div>
                <div class="yourName section">
                    <label for="yourName"><span v-if="flag === 1" class="need">必須</span>NAME</label>
                    <input v-if="flag === 1" v-model="yourName" type="text" placeholder="鈴木一郎" name="yourName"
                        id="yourName" required>
                    <input v-if="flag === 2" :value="yourName" type="text" name="yourName" id="yourName" readonly>
                </div>
                <div class="eMail section">
                    <label for="eMail"><span v-if="flag === 1" class="need">必須</span>E-MAIL</label>
                    <input v-if="flag === 1" v-model="eMail" type="email" placeholder="key4d.lab@gmail.com" name="eMail"
                        id="eMail" required>
                    <input v-if="flag === 2" :value="eMail" type="email" name="eMail" id="eMail" readonly>
                </div>
                <div class="telNumber section">
                    <label for="telNumber"><span v-if="flag === 1" class="need">必須</span>TEL</label>
                    <input v-if="flag === 1" v-model="telNumber" type="telephone" placeholder="0312345678"
                        name="telNumber" id="telNumber" required>
                    <input v-if="flag === 2" :value="telNumber" type="telephone" name="telNumber" id="telNumber"
                        readonly>
                </div>
                <div class="hpURL section">
                    <label for="hpURL"><span v-if="flag === 1" class="any">任意</span>URL</label>
                    <input v-if="flag === 1" v-model="hpURL" ype="url" placeholder="https://key4d-lab.com" name="hpURL"
                        id="hpURL">
                    <input v-if="flag === 2" :value="hpURL" type="url" name="hpURL" id="hpURL" readonly>
                </div>
                <div class="message section">
                    <label for="message"><span v-if="flag === 1" class="any">任意</span>MESSAGE</label>
                    <textarea v-if="flag === 1" v-model="message" type="text" placeholder="お問い合わせ内容を入力" name="message"
                        id="message"></textarea>
                    <textarea v-if="flag === 2" :value="message" type="text" name="message" id="message"
                        readonly></textarea>
                </div>
                <div class="btnSection">
                    <router-link to="/contact/" class="btnBack" v-if="flag === 1"><span>お問い合わせ選択画面に戻る</span>
                    </router-link>
                    <input class="btnConfirm" v-if="flag === 1" @click="checkForm()" type="button" name="btnConfirm"
                        value="入力内容を確認する">
                    <button class="btnBack" v-if="flag === 2" @click="flagBack()">お問い合わせ入力画面に戻る</button>
                    <input class="btnConfirm" v-if="flag === 2" type="submit" name="submit" value="送信する">
                </div>
            </form>
        </div>
        <div class="sendComplete" v-if="flag === 3">
            <div class="sentMeg">
                <h3>送信完了</h3>
                <p>お問い合わせ内容を<br>{{eMail}}<br>宛に自動送信しました。</p>
            </div>
            <router-link to="/" class="backHome">ホームへ戻る</router-link>
        </div>
    </div>
</template>

<script>
    import emailjs from "emailjs-com";
    export default {
        props: ["id"],
        data() {
            return {
                flag: 1,
                isActive: true,
                errors: [],
                companyName: null,
                yourName: null,
                eMail: null,
                telNumber: null,
                hpURL: null,
                message: null
            }
        },
        methods: {
            contents: function () {
                if (this.$route.params.id === "web") {
                    return "WEB制作のご依頼・お見積り"
                } else if (this.$route.params.id === "illustration") {
                    return "イラスト制作のご依頼・お見積り"
                } else if (this.$route.params.id === "appUI") {
                    return "アプリUI設計のご依頼・お見積り"
                } else if (this.$route.params.id === "otherDev") {
                    return "その他制作のご依頼・お見積り"
                } else if (this.$route.params.id === "plan") {
                    return "各種プランについて"
                } else if (this.$route.params.id === "otherAbout") {
                    return "その他のご質問・ご相談"
                } else if (this.$route.params.id === "media") {
                    return "メディア取材・掲載"
                } else {
                    return "その他"
                }
            },
            flagBack: function () {
                this.flag -= 1;
            },
            checkForm: function () {
                if (this.companyName && this.yourName && this.eMail && this.telNumber) {
                    this.flag += 1;
                }
                this.errors = [];
                if (!this.companyName) {
                    this.errors.push('『会社名』を入力してください');
                }
                if (!this.yourName) {
                    this.errors.push('『お名前』を入力してください');
                }
                if (!this.eMail) {
                    this.errors.push('『メールアドレス』を入力してください');
                }
                if (!this.telNumber) {
                    this.errors.push('『電話番号』を入力してください');
                }
            },
            sendEmail: function (e) {
                event.preventDefault()
                let self = this
                emailjs.sendForm("default_service", "template_2hGuzGGu", e.target, 'user_fN1iN1ZGaGhk9Q7OYIfX9')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text)
                        self.flag += 1;
                    }, (error) => {
                        console.log('FAILED...', error)
                        window.alert('送信に失敗しました')
                    });

            }
        }
    };
</script>

<style lang="scss" scoped>
    .contactForm {
        width: 70%;
        margin: 0 15%;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        .header {
            width: 100%;
            margin-top: 3em;

            img {
                width: 25%;
            }

            .formFlow {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 3em;

                .stepBoxActive {
                    width: 25%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color: $font-color;
                    border: 1.5px solid $font-color;
                    box-sizing: border-box;
                    justify-content: center;
                    text-align: center;

                    p.stepName {
                        font-size: 1em;
                        padding-left: 1em;
                        color: white;
                    }

                    p.stepNumber {
                        font-size: 1em;
                        font-weight: bold;
                        color: white;
                    }
                }

                .stepBoxNonActive {
                    width: 25%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border: 1.5px solid #888888;
                    box-sizing: border-box;
                    justify-content: center;
                    text-align: center;

                    p.stepName {
                        font-size: 1em;
                        padding-left: 1em;
                    }

                    p.stepNumber {
                        font-size: 1em;
                        font-weight: bold;
                    }
                }
            }
        }

        .formList {
            width: 100%;

            form {
                width: 100%;
                margin-bottom: 3em;

                .section {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: 1em;
                    align-items: baseline;

                    label {
                        width: 20%;
                        text-align: left;
                        font-size: 1em;

                        span.need {
                            font-size: 0.6em;
                            color: white;
                            border: none;
                            border-radius: 3px;
                            background: #d63447;
                            padding: 0.4em 1.5em;
                            margin-right: 1em;
                        }

                        span.any {
                            font-size: 0.6em;
                            color: white;
                            border: none;
                            border-radius: 3px;
                            background: $font-color;
                            padding: 0.4em 1.5em;
                            margin-right: 1em;
                        }
                    }

                    input {
                        width: 70%;
                        text-align: left;
                        padding: 1em;
                        border: none;
                        border-radius: 3px;
                        background: #f9f9f9;
                        font-size: 1em;
                    }

                    textarea {
                        width: 70%;
                        height: 20vh;
                        text-align: justify;
                        padding: 1em;
                        border: none;
                        border-radius: 3px;
                        background: #f9f9f9;
                        font-size: 1em;
                    }

                    p {
                        width: 70%;
                        text-align: left;
                        border: none;
                        font-size: 1.3em;
                        margin-top: 0em;
                        margin-bottom: 0em;
                    }
                }

                .errorSection {
                    width: 100%;
                    border: none;

                    b {
                        color: #d63447;
                    }

                    li {
                        color: #d63447;
                    }
                }

                .btnSection {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 2em;

                    .btnConfirm {
                        width: 60%;
                        background: #75b79e;
                        padding: 1em;
                        border: none;
                        color: white;
                        font-size: 1em;
                        font-weight: bold;
                    }

                    .btnBack {
                        width: 33%;
                        text-align: center;
                        border: 3px solid #75b79e;
                        background: transparent;
                        padding: 1em;
                        color: #75b79e;
                        font-size: 1em;
                        font-weight: bold;
                    }
                }
            }
        }

        .sendComplete {
            text-align: center;
            margin-bottom: 5em;
        }

        .backHome {
            background: $font-color;
            color: white;
            padding: 1em 5em;
        }
    }
</style>