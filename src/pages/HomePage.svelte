<script>
  import {  Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css'

  import PageTitle from '../components/PageTitle.svelte'

  import Img01 from "../assets/geo01.jpg"
  import Img02 from "../assets/geo02.jpg"
  import Img03 from "../assets/geo03.jpg"
  import Img04 from "../assets/geo04.jpg"
  import Img05 from "../assets/geo05.jpg"

  export let params
</script>

<section class="page">
  <Splide aria-label="My Favorite Images">
    <SplideSlide>
      <img src={Img01} alt="Geo 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src={Img02} alt="Geo 2"/>
    </SplideSlide>
    <SplideSlide>
      <img src={Img03} alt="Geo 3"/>
    </SplideSlide>
    <SplideSlide>
      <img src={Img04} alt="Geo 4"/>
    </SplideSlide>
    <SplideSlide>
      <img src={Img05} alt="Geo 5"/>
    </SplideSlide>
  </Splide>
</section>

<style>
  img {
    opacity: 0.8;
    border: 2px solid #666;
  }
</style>