import Field from '../../../../../../src/components/record/Field';
import form from '../../../../../../src/plugins/recordTypes/taxon/forms/default';
import createPluginContext from '../../../../../../src/helpers/createPluginContext';

chai.should();

describe('taxon record default form', function suite() {
  it('should be a Field', function test() {
    const pluginContext = createPluginContext();
    const { template } = form(pluginContext);

    template.type.should.equal(Field);
  });
});
