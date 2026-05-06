class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjacencyMap = new Map();
        const waitings = new Array(numCourses).fill(0);

        for (let i = 0; i < prerequisites.length; i++) {
            const [course, requirement] = prerequisites[i];
            waitings[course]++;
            const waiters = adjacencyMap.get(requirement) ?? [];
            waiters.push(course);
            adjacencyMap.set(requirement, waiters);
        }

        const queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (waitings[i] === 0) queue.push(i);
        }

        const path = [];
        let coursesCounter = 0;

        while (queue.length) {
            const currCourse = queue.shift();
            coursesCounter++;
            path.push(currCourse);

            const courseWaiters = adjacencyMap.get(currCourse);
            if (!courseWaiters) continue;

            for (const course of courseWaiters) {
                waitings[course]--;
                if (waitings[course] === 0) {
                    queue.push(course);
                }
            }
        }

        return coursesCounter === numCourses ? path : [];
    }
}
