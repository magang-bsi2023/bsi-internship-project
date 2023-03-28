<script>
    import { page } from '$app/stores'

    function pageTitle() {
        // Use status code if there's an error
        if ($page.error) return $page.status

        if ($page.url.pathname === '/') return 'Home'

        const title = $page.url.pathname.split('/').pop().replace(/-/g, ' ')
        const capilized = title.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

        return String(capilized) || ''
    }
</script>

{pageTitle()}