class Fibonacci {
    constructor() {
        // Initialise seeds
        this.first = 0;
        this.second = 1;
    }

    next() {
        // Return the next Fibonacci number in the current sequence
        let next = this.first + this.second;
        this.first = this.second;
        this.second = next;
        return next;
    }

    init(seed) {
        // Reset seeds to start to check if seed is valid
        this.first = 0;
        this.second = 1;

        while (this.second < seed) {
            this.next();
        }

        if (this.second != seed) {
            throw new Error('Not a fibonacci number');
        }
        
    }

    skip(forward) {
        if (!Number.isInteger(forward)) {
            throw new Error('Must be an integer');
        }
        if (forward < 1) {
            throw new Error('Cannot skip backwards');
        }
        // Return the Fibonacci number further on in the sequence
        for (let i = 0; i < forward; i++) {
            this.next();
        }
        return this.second;
    }

    previous() {
        let previous = this.second;
        this.second = this.first;
        this.first = previous - this.first;
        return this.second;

        
    }
}

module.exports = Fibonacci;