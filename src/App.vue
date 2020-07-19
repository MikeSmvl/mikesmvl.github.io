<template>
    <div id="app">
        <NavigationBar />
        <Header />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        NavigationBar,
        Header,
        About,
        Services,
        Resume,
        Portfolio,
        Contact,
        Footer,
    },
};
</script>

<style>
#app {
}
</style>
