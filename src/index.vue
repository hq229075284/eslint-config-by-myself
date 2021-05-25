<script>
const a = {}
export default {
  data() {
    return {
      // /* eslint-disable prettier/prettier */
      abc: [{ x: 1 }, { y: 1 }, { z: 1 }, { q: 1 }],
      abd: {},
    }
  },
  method: {
    c() {
      console.log(1)
    },
  },
  render() {
    return (
      <div>
        <div>
          {true ? (
            <div>
              <div>123</div>
              <div>123</div>
            </div>
          ) : null}
        </div>
      </div>
    )
  },
}
</script>
<style scoped>
body {
  background-color: red;
  grid-template-columns: auto;
}
</style>
