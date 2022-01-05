<script context="module">
  export const hydrate = false;
  export const router = false;
  export const prerender = true;
</script>

<nav>
	<ul class="flex mb-5 justify-around">
		<li><a class="text-lg" href="/test-p-01">01</a></li>
		<li><a class="text-lg font-bold" href="/test-p-02">02</a></li>
	</ul>
</nav>
<main>
	<section class="bg-blue-400 p-4 mb-12" data-jamin="BIRD_SEC">
		<h1 class="text-xl text-blue-800 mb-2">King Bird</h1>
		<div class="bg-green-400 p-4" data-jamin="BIRD_SEC.KING_BIRD">
			<div class="bg-green-200 p-4 mb-2">
				<span data-jamin="BIRD_SEC.KING_BIRD.NAME">Name - Replace Me</span>
			</div>
			<div class="bg-green-200 p-4">
				<img data-jamin="BIRD_SEC.KING_BIRD.PHOTO" alt="bird" />
			</div>
		</div>
	</section>
	<section data-jamin="APPLE_SEC" class="bg-blue-800 p-4">
		<h1 class="text-xl text-blue-200 mb-2">Honey-Crips</h1>
		<ol data-jamin="APPLE_SEC.HONEYCRISPS">
			<li class="bg-blue-400 p-4" data-jamin="APPLE_SEC.HONEYCRISPS.APPLE">
				<div class="bg-green-400 p-4">
					<div class="bg-green-200 p-4 mb-2">
						<span data-jamin="APPLE_SEC.HONEYCRISPS.APPLE.NAME">Name - Replace Me</span>
					</div>
					<div class="bg-green-200 p-4">
						<span data-jamin="APPLE_SEC.HONEYCRISPS.APPLE.BIO">Bio - Replace Me</span>
					</div>
				</div>
			</li>
		</ol>
	</section>
</main>
