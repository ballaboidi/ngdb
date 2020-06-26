<script>
import * as Images from '@/images'

export default {
  name: 'AppImage',
  functional: true,
  props: {
    name: {
      type: String,
      default: undefined,
      required: true
    },
    alt: {
      type: String,
      default: undefined,
      required: true
    }
  },
  render(h, { props: { name, alt }, data }) {
    data.class = ['img-fluid', data.class]

    data.attrs = {
      src: Images[name],
      alt,
      title: alt,
      ...data.attrs
    }

    return h('img', data)
  }
}
</script>
