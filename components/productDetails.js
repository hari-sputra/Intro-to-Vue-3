app.component("product-detail", {
  props: {
    detail: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div>
        <p>{{desc}}</p>
    </div>`,
  data() {
    return {
      deskripsi: "this is premium quality product",
    };
  },
  computed: {
    desc() {
      if (this.detail) {
        return this.deskripsi;
      }
    },
  },
});
