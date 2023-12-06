export default function Error({errorMessage}) {

    return (
        <>
            <h1>Възникна грешка. Моля да се свържите с администратор, за да можем да отстраним проблема възможно
                най-бързо.</h1>
            <h3>Грешката е: {errorMessage}</h3>
        </>
    );
}