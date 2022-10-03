import { NearestFilter, RepeatWrapping , TextureLoader } from "three"

import {
    dirtImg,
    logImg,
    grassImg,
    glassImg,
    woodImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

// Makes it so the image will not be blurred but pixelated
groundTexture.magFilter = NearestFilter;
// Without wrapS and wrapT the image will stretch by default
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;




export {
    grassTexture,
    glassTexture,
    dirtTexture,
    logTexture,
    woodTexture,
    groundTexture,
}