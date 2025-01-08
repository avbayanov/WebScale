<script lang="ts" setup>
  

  function init () {
    /* navigator.permissions.query({ name: PermissonName.Bluetooth })
      .then(status => {
        console.log(status)

        if (status.state === 'denied') {
          // ask perm
          // return
        }
      }) */

    let options = {

    }

    navigator.bluetooth
      .requestDevice(options)
      .then(device => {
        console.log(`Name: ${device.name}`)
        // Do something with the device.
      })
      .catch(error => console.error(`Something went wrong. ${error}`))
  }

  init()

  interface BluetoothDevice {
    name: string
  }
</script>
