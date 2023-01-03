import BFeatures from './Features';
const FeaturesB = () => {
    const FinfO = [{
        Image: "bi bi-activity icon",
        title: "Lorem Ipsum",
        p: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    }, {
        Image: "bi bi-bounding-box-circles icon",
        title: "Sed ut perspici",
        p: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    }, {
        Image: "bi bi-calendar4-week icon",
        title: "Magni Dolores",
        p: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    }, {
        Image: "bi bi-broadcast icon",
        title: "Nemo Enim",
        p: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    }]
    return (
        <section className='container d-flex'>
            <BFeatures Icon={FinfO[0].Image} title={FinfO[0].title} p={FinfO[0].p} />
            <BFeatures Icon={FinfO[1].Image} title={FinfO[1].title} p={FinfO[1].p} />
            <BFeatures Icon={FinfO[2].Image} title={FinfO[2].title} p={FinfO[1].p} />
            <BFeatures Icon={FinfO[3].Image} title={FinfO[3].title} p={FinfO[1].p} />
        </section>
    );
}
export default FeaturesB;