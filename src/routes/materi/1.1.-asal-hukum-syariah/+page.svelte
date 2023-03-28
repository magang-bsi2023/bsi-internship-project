<script>
	import { P } from 'flowbite-svelte'
	import MateriLayout from '$lib/components/MateriLayout.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
</script>

<MateriLayout prev="/materi" next="/materi/1.2.-prinsip-bank-syariah">
	<P>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, impedit in. Impedit expedita
		reprehenderit inventore. Placeat unde quibusdam voluptas cum quam? Ut soluta, explicabo numquam
		neque quidem placeat cupiditate fuga?
	</P>
	
	<Iframe title="video1" src="https://drive.google.com/file/d/1-9ZKjicBRw0ysRC_sjFhi0BUonOz0wIu/preview"></Iframe>
	
	<Iframe title="interactive1" src="https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"></Iframe>
</MateriLayout>