<template>
    <tr>
        <td>{{item.title}}</td>
        <td>{{item.author}}</td>
        <td>{{item.likes}}
        <td>{{item.type}}</td>
        <td>{{item.speaker}}</td>
        <td>{{item.description}}</td>
        <td>{{item.length}}</td>
        <td>{{formatDate(item.speakDate)}}</td>
        <td>{{item.description}}</td>
        <td>Action</td>
    </tr>
</template>

<script>
exports = {
    props: ["item"],
    methods: {
        formatDate: function(date) {
            console.log(date);
            return new Date(date);
        }
    }
}
</script>