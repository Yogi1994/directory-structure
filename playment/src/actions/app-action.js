/**
 * @fileoverview Action creators for app.
 */

import axios from 'axios';

const LOAD_PWD_LIST = 'LOAD_PWD_LIST';

// const d = {"directories":["bin","boot","cdrom","data","dev","etc","home","initrd.img","initrd.img.old","lib","lib64","lost+found","media","mnt","opt","proc","root","run","sbin","snap","srv","swapfile","sys","tmp","usr","var","vmlinuz","vmlinuz.old"]};
/**
 * this will fetch directories list.
 */
export function fetchDirList(filePath: string) {

  return (dispatch) => {
    if(filePath === undefined){
      filePath = '/';
    }
    console.log('http://localhost:3001?path=' + filePath)
    return axios.get('http://localhost:3001?path=' + filePath)
    .then(res => {
      console.log(res);
      dispatch({
        type: LOAD_PWD_LIST,
        data: res.data,
        filePath: filePath
      });
    })
    .catch(error => {
      console.log('Dir List', error);
    });
  };
}


export function createDirectory(dirName: string) {
  return (dispatch) => {
    return axios.post('http://localhost:3001',{body: {dirName: dirName}})
    .then(res => {
      console.log(res);
      
    })
    .catch(error => {
      console.log('Dir List', error);
    });
  };
}