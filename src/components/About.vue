<template>
    <div id="About">
        <section class="section" id="about">
            <!-- Title -->
            <div class="section-heading">
                <h3 class="title is-2">About Me</h3>
                <h4 class="subtitle is-5">
                    Jack of all trades, master of "some"
                </h4>
                <div class="container">
                    <p>
                        Software developer with <strong>1 year</strong> of
                        well-rounded experience with a degree in the field of
                        <strong>Software Engineering</strong>, extensive
                        knowledge of web development, testing and a love for
                        <strong>Coffee</strong>. Looking for an opportunity to
                        work and upgrade, as well as being involved in an
                        organization that believes in gaining a competitive edge
                        and giving back to the community.
                    </p>
                </div>
            </div>

            <div class="columns is-desktop has-same-height">
                <div class="column">
                    <!-- Profile -->
                    <div class="card">
                        <div class="card-content">
                            <h3 class="title is-4">Profile</h3>

                            <div class="content">
                                <table class="table-profile">
                                    <tr>
                                        <th colspan="1"></th>
                                        <th colspan="2"></th>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>Montreal, QC</td>
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>Look in resume!</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>mikael.samvelian@gmail.com</td>
                                    </tr>
                                </table>
                            </div>
                            <br />
                            <div class="buttons has-addons is-centered">
                                <a
                                    href="https://github.com/MikeSmvl"
                                    target="_blank"
                                    class="button is-rounded"
                                    >Github</a
                                >
                                <a
                                    href="https://www.linkedin.com/in/mikaelsamvelian/"
                                    target="_blank"
                                    class="button is-rounded"
                                    >LinkedIn</a
                                >
                                <a
                                    href="https://twitter.com/mikesmvl"
                                    target="_blank"
                                    class="button is-rounded"
                                    >Twitter</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <!-- Profile picture -->
                    <div class="card">
                        <div class="card-image">
                            <figure class="image container is-5by4">
                                <img
                                    src="../assets/coding-bali.jpeg"
                                    alt="Coding Picture"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <!-- Skills -->
                    <div class="card">
                        <div class="card-content skills-content">
                            <h3 class="title is-4">Skills</h3>
                            <div class="content">
                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>Python:</strong>
                                                <br />
                                                <progress
                                                    class="progress is-link"
                                                    value="92"
                                                    max="100"
                                                ></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>Javascript:</strong>
                                                <br />
                                                <progress
                                                    class="progress is-link"
                                                    value="90"
                                                    max="100"
                                                ></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>DevOps:</strong>
                                                <br />
                                                <progress
                                                    class="progress is-link"
                                                    value="86"
                                                    max="100"
                                                ></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong
                                                    >Test Driven
                                                    Development</strong
                                                >
                                                <br />
                                                <progress
                                                    class="progress is-link"
                                                    value="80"
                                                    max="100"
                                                ></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong
                                                    >Databases (No)SQL</strong
                                                >
                                                <br />
                                                <progress
                                                    class="progress is-link"
                                                    value="70"
                                                    max="100"
                                                ></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style>
.media-content {
    margin: 10px;
}
.card-image,
figure {
    height: 100%;
}
</style>
