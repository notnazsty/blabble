<script>
    
    export let data;

    $: ({roomId = ''} = data);


</script>

<p>hey {roomId}</p>