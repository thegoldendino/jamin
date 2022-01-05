<script context="module">
  export const hydrate = false;
  export const router = false;
  export const prerender = true;
</script>

<nav>
  <ul class="flex mb-5 justify-around">
    <li><a class="text-lg font-bold" href="/test-p-01">01</a></li>
    <li><a class="text-lg" href="/test-p-02">02</a></li>
  </ul>
</nav>
<main>
  <section data-jamin="PECAN_SEC" class="bg-rose-400 p-4 mb-12">
    <h1 class="text-xl text-yellow-200 mb-2">Pecan Section</h1>
    <div class="bg-yellow-200 p-4">
      <span data-jamin="PECAN_SEC.CLUBNAME">Clubname - Replace Me</span>
    </div>
  </section>
  <section data-jamin="BACON_SEC" class="bg-rose-400 p-4">
    <h1 class="text-xl text-yellow-200 mb-2">Bacon Section</h1>
    <div class="bg-yellow-200 p-4">
      <h2 class="text-lg text-orange-600 mb-2">Flavors</h2>
      <ol data-jamin="BACON_SEC.FLAVORS" class="bg-orange-600 p-2">
        <li>
          <span
            data-jamin="BACON_SEC.FLAVORS.FLAVOR"
            class="text-yellow-200"
            >Flavor - Replace Me</span
          >
        </li>
      </ol>
    </div>
  </section>
</main>
