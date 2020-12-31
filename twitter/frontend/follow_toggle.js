class FollowToggle{
    constructor($el){
        const $button = $('$el')
        this.userId = $button.data('user-id');
        this.followState = $button.data('initial-follow-state');
        this.render();
    }

    render() {
        if (this.followState === "Not Followed") {
            $button.text("Follow!");
        } else {
            $button.text("Unfollow!");
        }
    }

    handleClick() {
        $button.on("click", e => {
            e.preventDefault();
            if (this.followState === "Not Followed") {
                $.ajax({
                    method: "POST",
                    url: "/users/:id/follow",
                    dataType: json,
                    success () {
                        this.followState = "Followed";
                    }
                })
            } else {
                $.ajax({
                    method: "DELETE",
                    url: "/users/:id/follow",
                    dataType: json,
                    success () {
                        this.followState = "Not Followed";
                    }
                })
            }  
        })
    }

}

module.exports = FollowToggle;