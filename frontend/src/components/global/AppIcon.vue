<script>
import * as Icons from '@/icons'

export default {
  name: 'AppIcon',
  functional: true,
  props: {
    name: {
      type: String,
      default: undefined,
      required: true
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: [Number, String],
      default: 24
    }
  },
  render(h, {
    props: {
      name, fill, size
    }, data
  }) {
    data.attrs = {
      fill,
      width: size,
      height: size,
      version: '1.1',
      viewBox: '0 0 24 24',
      'aria-hidden': 'true',
      ...data.attrs
    }

    return h(Icons[name], data)
  }
}
</script>
