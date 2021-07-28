function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        if (type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        }
    };
}
