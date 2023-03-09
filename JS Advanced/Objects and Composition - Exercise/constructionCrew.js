function constructionCrew(worker) {
    if (worker.hasOwnProperty('dizziness') && worker.dizziness) {
        const water = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += water;
        worker.dizziness = false;
    }
    return worker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));