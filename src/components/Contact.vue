<template>
    <div id="Contact">
        <section class="section" id="contact">
            <div class="container">
                <div class="section-heading">
                    <h3 class="title is-2">Contact</h3>
                    <h4 class="subtitle is-5">Get in touch</h4>
                </div>
                <br />

                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <form
                            action="https://formspree.io/mbjzpvno"
                            method="POST"
                        >
                            <div class="box">
                                <div class="field">
                                    <label class="label">Name</label>
                                    <div class="control">
                                        <input
                                            class="input"
                                            type="text"
                                            placeholder="Text input"
                                            name="name"
                                        />
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input
                                            class="input"
                                            type="email"
                                            placeholder="Email input"
                                            value=""
                                            name="_replyto"
                                        />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Message</label>
                                    <div class="control">
                                        <textarea
                                            class="textarea"
                                            placeholder="Textarea"
                                            name="message"
                                        ></textarea>
                                    </div>
                                </div>

                                <div
                                    class="field is-grouped has-text-centered columns is-centered"
                                >
                                    <div class="control column">
                                        <button
                                            class="button is-link"
                                            type="submit"
                                        >
                                            <span class="icon">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Contact',
};
</script>

<style></style>
