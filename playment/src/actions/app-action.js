/**
 * @fileoverview Action creators for app.
 */

// import axios from 'axios';

const LOAD_PWD_LIST = 'LOAD_PWD_LIST';

const MAIN_DIR = {
  "/":{
    "Folder1":{
      "bin":{},
      "home":{
        "Yogesh": {
          "dev": {
            "react":{
              "Project1":{
                "code":{}
              },
              "Project2":{
                "code":{}
              }
            },
            "python":{
              "Project1":{
                "code":{}
              },
              "Project2":{
                "code":{}
              }
            }
          },
          "timepass": {
            "react":{
              "Project1":{
                "code":{}
              },
              "Project2":{
                "code":{}
              }
            },
            "python":{
              "Project1":{
                "code":{}
              },
              "Project2":{
                "code":{}
              }
            }
          }
        }
      }
    },
    "Folder2":{}
  }

};

/**
 * this will fetch directories list.
 */
export function fetchDirList(filePath: Array<string>) {
  var directories = MAIN_DIR;
  for(let i = 0 ; i < filePath.length; i++){
    directories = directories[filePath[i]];
  }
  let dirList = [];
  for( let dirName in directories){
    dirList.push(dirName);
  }
  return {
    type: LOAD_PWD_LIST,
    data: {directories: dirList},
    filePath: filePath
  };
}

/**
 * This will create directory.
 */
export function createDirectory(dirName: string, filePath: Array<string>) {
  var directories = MAIN_DIR;
  for(let i = 0 ; i < filePath.length; i++){
    directories = directories[filePath[i]];
  }
  directories[dirName] = {};
  let dirList = [];
  for( let dirName in directories){
    dirList.push(dirName);
  }
  return {
    type: LOAD_PWD_LIST,
    data: {directories: dirList},
    filePath: filePath
  };
}