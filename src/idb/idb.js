module.exports = {

  /**
   * 
   * @param {String} name 
   * @param {Function<IDBDatabase>} onupgradeneeded 
   * @param {Number} version
   * @returns {IDBDatabase}
   */
  OpenDB(name, onupgradeneeded, version) {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject("we won't open indexedDB on server")
      } else {
        let args = [name]
        args = version ? args.concat(version) : args
        let req = window.indexedDB.open(...args)
        req.onsuccess = e => {
          let db = req.result
          resolve(db)
        }
        req.onerror = e => {
          reject(e)
        }
        req.onupgradeneeded = e => {
          if (onupgradeneeded) {
            let db = e.target.result
            onupgradeneeded(db)
          }
        }
      }
    })
  },

  /**
   * 
   * @param {IDBDatabase} db 
   * @param {String} storeName 
   * @param {*} item 
   */
  AddItem(db, storeName, item) {
    return new Promise((resolve, reject) => {
      let req = db.transaction(storeName, 'readwrite').objectStore(storeName).add(item)
      req.onsuccess = e => {
        resolve(e.target.result)
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
   * 
   * @param {IDBDatabase} db 
   * @param {String} storeName 
   * @param {*} key 
   */
  GetItem(db, storeName, key) {
    return new Promise((resolve, reject) => {
      let req = db.transaction(storeName, 'readonly').objectStore(storeName).get(key)
      req.onsuccess = e => {
        resolve(e.target.result)
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
  * 
  * @param {IDBDatabase} db 
  * @param {String} storeName 
  * @param {IDBKeyRange} keyRange 
  */
  GetAll(db, storeName, keyRange) {
    return new Promise((resolve, reject) => {
      let getallArgs = keyRange ? [keyRange] : []
      let req = db.transaction(storeName, 'readonly').objectStore(storeName).getAll(...getallArgs)
      req.onsuccess = e => {
        resolve(e.target.result)
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
  * 
  * @param {IDBDatabase} db 
  * @param {String} storeName 
  * @param {*} key 
  */
  DeleteItem(db, storeName, key) {
    return new Promise((resolve, reject) => {
      let req = db.transaction(storeName, 'readwrite').objectStore(storeName).delete(key)
      req.onsuccess = e => {
        resolve(e.target.result)
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
  * 
  * @param {IDBDatabase} db 
  * @param {String} storeName 
  * @param {*} payload 
  */
  EditItem(db, storeName, payload) {
    return new Promise((resolve, reject) => {
      let req = db.transaction(storeName, 'readwrite').objectStore(storeName).put(payload)
      req.onsuccess = e => {
        resolve(e.target.result)
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
  * 
  * @param {IDBDatabase} db 
  * @param {String} storeName 
  * @param {*} index 
  * @param {IDBKeyRange} keyRange 
  */
  GetAllByIndex(db, storeName, index, keyRange) {
    return new Promise((resolve, reject) => {
      let getallArgs = keyRange ? [keyRange] : []
      let req = db.transaction(storeName, 'readonly').objectStore(storeName).index(index).getAll(...getallArgs)
      req.onsuccess = e => {
        resolve(e.target.result)
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
  * 
  * @param {IDBDatabase} db 
  * @param {String} storeName 
  * @param {Function} pred 
  */
  FindAllByPred(db, storeName, pred) {
    return new Promise((resolve, reject) => {
      let req = db.transaction(storeName, 'readwrite').objectStore(storeName).openCursor()
      let res = []
      req.onsuccess = e => {
        // resolve(e.target.result)
        /**
         * @type {IDBCursor}
         */
        let cursor = e.target.result
        if (cursor) {
          if (pred(cursor.value)) {
            res.push(cursor.value)
          }
          cursor.continue()
        } else {
          resolve(res)
        }
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

  /**
 * 
 * @param {IDBDatabase} db 
 * @param {String} storeName 
 * @param {Function} pred 
 */
  FindAllKeyByPred(db, storeName, pred) {
    return new Promise((resolve, reject) => {
      let req = db.transaction(storeName, 'readwrite').objectStore(storeName).openCursor()
      let res = []
      req.onsuccess = e => {
        // resolve(e.target.result)
        /**
         * @type {IDBCursor}
         */
        let cursor = e.target.result
        if (cursor) {
          if (pred(cursor.value)) {
            res.push(cursor.key)
          }
          cursor.continue()
        } else {
          resolve(res)
        }
      }
      req.onerror = e => {
        reject(e)
      }
    })
  },

}