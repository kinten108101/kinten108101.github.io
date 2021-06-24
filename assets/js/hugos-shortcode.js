/*
CMS.registerEditorComponent({
    id: "figure",
    label: "Figure",
    fields: [{
            name: "title",
            label: "Figure Title",
            widget: "string"
        },
        {
            name: "src",
            label: "Figure SRC",
            widget: "string"
        },
    ],
    pattern: /{{< figure src="([a-zA-Z0-9-_ ]+)" title="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            title: match[1],
            src: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< figure src="${obj.src}" title="${obj.title}" >}}`;
    },
    toPreview: function(obj) {
        return `<figure><img src=${obj.src} alt=${obj.title}><figcaption>${obj.title}</figcaption></figure>`;
    },
});
CMS.registerEditorComponent({
    id: "gist",
    label: "Gist",
    fields: [{
            name: "username",
            label: "Github Username",
            widget: "string"
        },
        {
            name: "gid",
            label: "Gist ID",
            widget: "string"
        },
    ],
    pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            username: match[1],
            gid: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "instagram",
    label: "Instagram",
    fields: [{
        name: "pid",
        label: "Post id",
        widget: "string"
    }],
    pattern: /{{< instagram ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            pid: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< instagram ${obj.pid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< instagram ${obj.pid} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "twitter",
    label: "Twitter",
    fields: [{
        name: "tid",
        label: "Tweet id",
        widget: "string"
    }],
    pattern: /{{< tweet ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            tid: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< tweet ${obj.tid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< tweet ${obj.tid} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "vimeo",
    label: "Vimeo",
    fields: [{
        name: "shortcode",
        label: "Vimeo shortcode",
        widget: "string"
    }],
    pattern: /{{< vimeo ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            shortcode: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< vimeo ${obj.shortcode} >}}`;
    },
    toPreview: function(obj) {
        return `{{< vimeo ${obj.shortcode} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [{
        name: "id",
        label: "Youtube Video ID",
        widget: "string"
    }],
    pattern: /{{< youtube ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            id: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< youtube ${obj.id} >}}`;
    },
    toPreview: function(obj) {
        return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`;
    },
});
*/
CMS.registerEditorComponent({
    id: "inline-image",
    label: "Inline Image",
    fields: [{
                name: "type",
                label: "Alignment",
                widget: "select",
                default: "middle",
                options:[{
                    label: "Left",
                    value: "left"
                },
                {
                    label: "Middle (full-sized only)",
                    value: "middle"
                },
                {
                    label: "Right",
                    value: "right"
                }]
        },
        {
            name: "width",
            label: "Width (10-100)%",
            widget: "number",
            default: "100",
            min: 10,
            max: 100
        },
        {
            name: "src",
            label: "Image",
            widget: "image",
            default: "/assets/image/randomsign.jpg",
            media_library: { config: { multiple: false}}
        },
        {
            name: "alt",
            label: "Alternative text (also caption)",
            widget: "string"
        }
],
    pattern: /{% include image-inline.html type="([a-zA-Z0-9]+)" width="([a-zA-Z0-9]+)" src="([a-zA-Z0-9]+)" alt="([a-zA-Z0-9]+)" %}/,
    fromBlock: function(match) {
        return {
            type: match[1],
            width: match[2],
            src: match[3],
            alt: match[4]
        };
    },
    toBlock: function(obj) {
        return `{% include image-inline.html type="${obj.type}" width="${obj.width}" src="${obj.src}" alt="${obj.alt}" %}`;
    },
    toPreview: function(obj) {
        return `<link rel="stylesheet" href="/assets/css/image-inline.css"> <img  class="${obj.type}" style="width:${obj.width}%;" src="${obj.src}" alt="${obj.alt}">`;
    },
});