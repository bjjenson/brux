import {
  unstable_createResource,
  createResource as cSource,
} from 'react-cache';

let createResource = cSource;

if (unstable_createResource) {
  createResource = unstable_createResource;
}

export { createResource };