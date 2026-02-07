import{ activeIntersectionObserver} from "../../observes";

export const observe = {
    mounted:(el,binding) => {
        el.dataset.active= binding.value;
        activeIntersectionObserver.observe(el);
    },
    Unmounted(el,binding){
        activeIntersectionObserver.unobserve(el);
    },
};