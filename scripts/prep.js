jQuery(document).ready(function() {
    var tprep = 1;
    var tw = parseInt($(".prepod:first").width());
    set(tprep, tw);
    $(".prepod").click(function() {
        var id = parseInt($(this).data("id"));
        tprep = id;
        var a = $(this).width();
        tw = a;
        console.log(tprep + '+' + tw);
        set(tprep, tw);
    });
    $(".aright").click(function() {
        if (tprep !== 6) {
            tprep++;
            set(tprep, tw);
        } else {
            tprep = 1;
            set(tprep, tw);
        }
    });
    $(".aleft").click(function() {
        if (tprep !== 1) {
            tprep--;
            set(tprep, tw);
        } else {
            tprep = 6;
            set(tprep, tw);
        }
    });

    function set(id, a) {
        var data = $('.prepod[data-id="' + id + '"]').find(".prepod-data").html();
        var pos = 0;
        if (id == 1 || id == 4) {
            pos = -32;
        }
        if (id == 2 || id == 5) {
            pos = parseInt(a + 12);
        }
        if (id == 3 || id == 6) {
            pos = parseInt(a * 2) + 50;
        }
        if (id <= 3) {
            $(".arrow-top").css("margin-left", pos);
        }
        if (id >= 4) {
            $(".arrow-bottom").css("margin-left", pos);
        }

        if (id <= 3) {
            $(".arrow-bottom").css("visibility", "hidden");
            $(".arrow-top").css("visibility", "visible");
        }
        if (id >= 4) {
            $(".arrow-top").css("visibility", "hidden");
            $(".arrow-bottom").css("visibility", "visible");
        }
        if (data !== undefined) {
            $(".p-insert").html(data)
        };
    }
});