<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/nunito"
    import type { LayoutProps } from "./$types"

    let { children }: LayoutProps = $props()
</script>

{@render children()}
