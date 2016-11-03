defmodule SequenceTest do
  use ExUnit.Case, async: true

  describe ":get_next_value call" do
    it "returns the next value" do
      return = Sequence.handle_call(
        :get_next_value,
        self,
        5
      )
      assert { :reply, 5, _ } = return
    end

    it "increments the state" do
      return = Sequence.handle_call(
        :get_next_value,
        self,
        5
      )
      assert { :reply, _, 6 } = return
    end
  end
end
