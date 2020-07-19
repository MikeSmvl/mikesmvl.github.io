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

            <div class="columns has-same-height is-gapless">
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
                                        <td>Montreal</td>
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
                                    class="button is-link"
                                    >Github</a
                                >
                                <a
                                    href="https://www.linkedin.com/in/mikaelsamvelian/ "
                                    class="button is-link"
                                    >LinkedIn</a
                                >
                                <a
                                    href="https://twitter.com/mikesmvl"
                                    class="button is-link"
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
                            <figure class="image is-4by3">
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
                                                    class="progress is-primary"
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
                                                <strong
                                                    >Javascript (Node, Express,
                                                    React and Vue):</strong
                                                >
                                                <br />
                                                <progress
                                                    class="progress is-primary"
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
                                                <strong
                                                    >DevOps (Kubernetes, Docker
                                                    and CI/CD):</strong
                                                >
                                                <br />
                                                <progress
                                                    class="progress is-primary"
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
                                                    >Test Driven Development
                                                    (E2E Frameworks)</strong
                                                >
                                                <br />
                                                <progress
                                                    class="progress is-primary"
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
                                                    >Databases (SQL and
                                                    NoSQL)</strong
                                                >
                                                <br />
                                                <progress
                                                    class="progress is-primary"
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

<style></style>
