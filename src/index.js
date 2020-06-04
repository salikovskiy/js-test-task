"use sctrict";
import './style.css'
// Задача 1
class StringBuilder {
    constructor(value) {
        this.value = value
    }
    append(str) {
        this.value += str
        return this
    }
    prepend(str) {
        this.value = str + this.value
        return this
    }
    pad(str) {
        this.value = str + this.value + str;
        return this
    }
}

const builder = new StringBuilder(".");

builder
    .append('^')
    .prepend('^')
    .pad('=');

console.log(builder.value);

// Задача 2 
const input = document.querySelector(".js-input");
const btnCreate = document.querySelector("[data-action=render]");
const btnDelete = document.querySelector("[data-action=destroy]");
const boxes = document.querySelector("#boxes");

let x = 30;

const createBoxes = () => {
    let div = document.createElement("DIV");
    div.style.height += `${x}` + "px";
    div.style.width += `${x}` + "px";

    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    div.style.backgroundColor = `rgba(${r},${g},${b})`;
    boxes.appendChild(div);
    x += 10;
};

btnCreate.addEventListener("click", () => {
    for (let index = 0; index < input.value; index++) {
        createBoxes(input.value);
    }
});

btnDelete.addEventListener("click", () => {
    boxes.innerHTML = ''
})

// Задача 3 
import * as basicLightbox from 'basiclightbox'
const key = "14450933-d0f1a699d902287387897d7a1";
const state = {
    currentPage: 0,
    inputValue: "",
    responce: ""
};

const gallery = document.querySelector(".gallery");
const search = document.querySelector("#search-form");

const getData = (input, page) => {
    return fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=20&key=${key}`
    ).then((data) => data.json()).then(observer.observe(document.querySelector('.intersection-trigger')));
};
const onClick = e => {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src=${e.target.dataset.source}>
                <button class='closeButton'>X</button>
            </div>
        `)
        instance.show()
        const btn = document.querySelector('.closeButton');
        btn.addEventListener('click', () => {
            instance.close()
        })
    }
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
}

const observer = new IntersectionObserver((entries) => {
    let string = ''
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            if (state.currentPage > 0) {
                getData(state.inputValue, state.currentPage += 1).then(
                    data => {
                        data.hits.forEach(image => {
                            string += `<li class="gallery__item">
                            <a
                              class="gallery__link"
                              href="${image.largeImageURL}"
                            >
                              <img
                                class="gallery__image"
                                src="${image.webformatURL}"
                                data-source="${image.largeImageURL}"
                                alt="${image.tags}"
                              />
                            </a>
                          </li>`
                        })
                        gallery.insertAdjacentHTML("beforeend", string)
                    }
                );
            }
        }
    })
}, options)

gallery.addEventListener('click', onClick)

search.addEventListener("submit", e => {
    let string = ''
    e.preventDefault();
    state.inputValue = search.query.value;
    state.currentPage = 1;
    getData(state.inputValue, state.currentPage).then(
        data => {
            data.hits.forEach(image => {
                string += `<li class="gallery__item">
                <a
                  class="gallery__link"
                  href="${image.largeImageURL}"
                >
                  <img
                    class="gallery__image"
                    src="${image.webformatURL}"
                    data-source="${image.largeImageURL}"
                    alt="${image.tags}"
                  />
                </a>
              </li>`
            })
            gallery.innerHTML = string
        }
    );
});