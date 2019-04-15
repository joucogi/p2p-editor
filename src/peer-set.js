import EventEmitter from 'events'

class PeerSet extends EventEmitter {

    constructor() {
        super()
        this.peers = new Set()
    }

    add(peer) {
        this.peers.add(peer)
        this.emit('added', peer)
    }

    remove(peer) {
        this.peers.delete(peer)
        this.emit('removed', peer)
    }

    forEach(callback) {
        this.peers.forEach(callback)
    }
}

export default PeerSet