const FollowToggle = require ("./follow_toggle.js")

$(() => {
    $("button.follow-toggle").each(el => {
        new FollowToggle(el);
    });
})
